# Rolling Scopes School. NodeJs Course. 
## Task1. Caesar cipher CLI tool

**The repository contains CLI which encode or decode a text by Caesar Cipher**

**Start Usage**

For starting to work with CLI need to run next command in the terminal (from the root repository directory):
```bash 
$ node caesar-cipher-cli -s 1 -a decode
```

**Possible Options:**
1.  **-s, --shift \<shift>**: required number, shift on how many characters will happen
2.  **-i, --input \<input>**: optional string, an input file path
3.  **-o, --output \<output>**: optional string, an output file path
4.  **-a, --action \<action>**: required string, type of an action - encode or decode

**Details:**
1. If action or shift options aren't provided, error message will be showed
2. If the input file is missed - text may be entered by terminal
3. If the output file is missed - encoded/decoded text will be provided into terminal
4. If the input and/or output file is given but doesn't exist or can't be readable, error will be provided in the terminal
5. Only English alphabet is encoding/decoding, all other characters are kept untouched

**Usage examples:**
- Encode by terminal
```bash
$ node caesar-cipher-cli -a encode -s 1
```
> terminal input:
> `Hello World!`

> terminal output:
> `Gdkkn Vnqkc!`

- Decode by terminal
```bash
$ node caesar-cipher-cli -a decode -s 1
```
> terminal input:
> `Gdkkn Vnqkc!`

> terminal output:
> `Hello World!`

- Encode by files
```bash
$ node caesar-cipher-cli -a encode -s 1 -i ./caesar-cipher-cli/test-data/output.txt -o ./caesar-cipher-cli/test-data/output.txt
```
> ./caesar-cipher-cli/test-data/input.txt
> `Hello World!`

> ./caesar-cipher-cli/test-data/output.txt
> `Gdkkn Vnqkc!`
