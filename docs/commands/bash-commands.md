# Bash Command Reference

This document provides a concise reference to common Bash commands that are useful in command line operations.

- `rm`: Removes files or directories. 
    - Usage: `rm example.txt` (removes `example.txt`)
    - Usage: `rm -rf directory_name` (recursively removes `directory_name` and its contents)

- `cd`: Changes the current directory. 
    - Usage: `cd my_directory` (navigates to `my_directory`)

- `mkdir`: Creates a new directory. 
    - Usage: `mkdir new_directory` (creates `new_directory`)

- `ls`: Lists all files and directories in the current directory. 
    - Usage: `ls`
- `ls -la`: Lists all files and directories in the current directory, including hidden ones, and provides detailed information.
    - Usage: `ls -la`

- `cp`: Copies files or directories. 
    - Usage: `cp file.txt new_location` (copies `file.txt` to `new_location`)
    - Usage: `cp -r directory_name new_location` (recursively copies `directory_name` and its contents to `new_location`)

- `grep`: Searches for a specific pattern in files. 
    - Usage: `grep "example" file.txt` (searches for "example" in `file.txt`)

- `history`: Displays the command history. 
    - Usage: `history`

- `cat`: Displays the content of a file. 
    - Usage: `cat file.txt` (displays content of `file.txt`)

- `|`: Pipes the output of one command as input to another command. 
    - Usage: `ls | grep "pattern"` (lists all files in the current directory and searches for "pattern" in the output)

- `sudo`: Runs a command with elevated privileges. 
    - Usage: `sudo brew install package_name` (installs a package using `brew` with root privileges)

- `su`: Switches to the root account to perform administrative tasks. 
    - Usage: `su` (switches to the root account after entering the root password)

> **Note:** Exercise caution when using these commands. Always double-check before executing any commands that may have irreversible effects.