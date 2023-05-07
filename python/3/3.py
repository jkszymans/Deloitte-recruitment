import os
from pathlib import Path
from datetime import date, datetime


def get_files(extensions: set, modification_date: date = None):
    cwd = os.getcwd()
    files = list(Path(cwd).iterdir())
    results = []
    for f in files:
        f = str(f)
        for ext in extensions:
            if f.endswith(ext):
                results.append(f)
                break

    if modification_date:
        files = list(
            filter(
                lambda f: datetime.fromtimestamp(os.path.getmtime(f)).date()
                == modification_date,
                results,
            )
        )

    return files


if __name__ == "__main__":
    print(get_files({".txt", ".py"}, modification_date=date(2023, 5, 5)))
