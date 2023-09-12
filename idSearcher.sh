#!/bin/bash
folder=whs-specific
file=whs-specific

echo "{" > "$file.json"
grep -oP 'id="\KContent[^"]*' ./"$folder"/"$file.html" | while read -r line; do 
    key=$(echo "$line" | sed 's/\(DropDownlist\|TextBox\|Textbox\|Dropdownlist\|DropDownList\|DatePicker\)//g' | sed 's/_$//g' | awk -F_ '{print $NF}')
    echo "\"$key\":{\"id\":\"$line\", \"value\": \"\"}," >> "$file.json"
done
sed -i '$ s/,$//' "$file.json"
echo "}" >> "$file.json"
