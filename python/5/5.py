import string
from collections import Counter


def get_words(filename: str):
    results = []
    with open(filename, "r", encoding="utf-8") as file:
        for line in file:
            # Remove punctuation marks
            line = line.translate(str.maketrans("", "", string.punctuation))

            for word in line.split():
                if len(word) >= 3:
                    results.append(word)
    return Counter(results)


if __name__ == "__main__":
    words = get_words("sample.txt")
    assert words["pies"] == 2
    assert words["krokodyl"] == 2
    assert words["świnia"] == 2
    assert words["kot"] == 1
