# Python script to generate the JS const imageGroups from a txt file

def process_links(file_path):
    image_groups = {}
    current_year = None

    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    seen_links = set()

    for line in lines:
        line = line.strip()

        if line.startswith('<h3'):
            # Kinyerjük az évszámot az id-ből
            if 'id="' in line:
                start = line.index('id="') + 4
                end = line.index('"', start)
                current_year = line[start:end]
                if current_year not in image_groups:
                    image_groups[current_year] = []
        elif line.startswith('http'):
            if line not in seen_links:  # csak egyszer adjuk hozzá
                if current_year:
                    image_groups[current_year].append(line)
                    seen_links.add(line)

    return image_groups

def generate_js(image_groups):
    js_output = "const imageGroups = {\n"
    for year, links in image_groups.items():
        js_output += f'  "{year}": [\n'
        for link in links:
            js_output += f'    "{link}",\n'
        js_output += "  ],\n"
    js_output += "};"
    return js_output

# Futtatás
if __name__ == "__main__":
    file_path = "output_links_FINAL.txt"  # itt add meg a txt fájl nevét
    image_groups = process_links(file_path)
    js_code = generate_js(image_groups)

    # Eredmény kiírása
    with open("generated_imageGroups.js", "w", encoding="utf-8") as f:
        f.write(js_code)

    print("✅ A 'generated_imageGroups.js' fájl létrejött!")
