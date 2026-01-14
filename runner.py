import pandas as pd
import importlib.util
import os
import sys
import io

# --- CONFIGURATION ---
PROBLEM_ID = os.environ.get('PROBLEM', '177')
SOLUTION_FILE = f"solutions/p{PROBLEM_ID}.py"
INPUT_FILE = f"inputs/{PROBLEM_ID}.txt"

def load_solution_func(filepath):
    """Imports the solution file and returns the first callable function."""
    if not os.path.exists(filepath):
        return None
    spec = importlib.util.spec_from_file_location("solution_module", filepath)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    
    # Return the first valid function that isn't built-in
    for name, obj in module.__dict__.items():
        if callable(obj) and not name.startswith("__") and name != "pd":
             return obj
    return None

def try_numeric(val):
    """Helper to convert string '100' -> 100 (int) or '1.5' -> 1.5 (float)."""
    try:
        return int(val)
    except ValueError:
        try:
            return float(val)
        except ValueError:
            return val

def parse_markdown_table(lines):
    """Converts a list of ASCII table strings into a Pandas DataFrame."""
    # 1. clean lines and remove empty ones
    lines = [l.strip() for l in lines if l.strip()]
    if not lines: return None

    # 2. Extract Headers (row 0)
    # Remove leading/trailing pipes and split
    headers = [h.strip() for h in lines[0].strip('|').split('|')]

    # 3. Extract Data
    data = []
    # Skip index 1 if it looks like a separator (e.g. |---|)
    start_idx = 2 if len(lines) > 1 and set(lines[1]).issubset({'|', '-', ' ', ':'}) else 1

    for line in lines[start_idx:]:
        # Split by pipe, strip whitespace, and try to convert numbers
        row_raw = [val.strip() for val in line.strip('|').split('|')]
        row_cleaned = [try_numeric(val) for val in row_raw]
        data.append(row_cleaned)

    return pd.DataFrame(data, columns=headers)

def parse_input_file(filepath):
    """Reads file and separates Tables (multi-line) from Scalars (single-line)."""
    with open(filepath, 'r') as f:
        file_lines = f.readlines()

    args = []
    buffer = []
    is_table_mode = False

    for line in file_lines:
        stripped = line.strip()
        
        # Logic: If line starts with '|', it's part of a table.
        if stripped.startswith('|'):
            is_table_mode = True
            buffer.append(stripped)
        else:
            # If we were reading a table and hit a non-table line, process the table
            if is_table_mode:
                args.append(parse_markdown_table(buffer))
                buffer = []
                is_table_mode = False
            
            # Process scalar values (skip empty lines)
            if stripped:
                args.append(try_numeric(stripped))
    
    # Flush buffer if file ended with a table
    if buffer and is_table_mode:
        args.append(parse_markdown_table(buffer))

    return args

def main():
    print(f"--- 🚀 Running Problem {PROBLEM_ID} ---")
    
    func = load_solution_func(SOLUTION_FILE)
    if not func:
        print(f"❌ Error: Solution file {SOLUTION_FILE} not found or no function inside.")
        return

    if not os.path.exists(INPUT_FILE):
        print(f"❌ Error: Input file {INPUT_FILE} not found.")
        return

    # Parse arguments
    try:
        args = parse_input_file(INPUT_FILE)
    except Exception as e:
        print(f"❌ Error parsing input file: {e}")
        return

    # Execute
    print(f"📥 Loaded {len(args)} arguments.")
    try:
        result = func(*args)
        print("\n--- ✅ Output ---")
        print(result)
    except Exception as e:
        print(f"\n❌ Execution Error: {e}")

if __name__ == "__main__":
    main()