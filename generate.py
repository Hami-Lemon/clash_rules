import ruamel.yaml

def main():
    with open("jscode.js", encoding="utf-8") as f:
        js = f.read()

    parsers = {
        "parsers": [
            {
                "reg": "^((https|http)?:\/\/)[^\s]+",
                "code": literal(js)
            }
        ]
    }

    with (open("parsers.yaml", "w", encoding="utf-8")) as f:
        yaml.dump(parsers, f)

if __name__ == "__main__":
    literal = ruamel.yaml.scalarstring.LiteralScalarString
    yaml = ruamel.yaml.YAML()
    main()
    print("ok")