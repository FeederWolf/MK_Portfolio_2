# Beolvassa a linkeket a forrás txt fájlból
with open("input_links.txt", "r") as file:
    links = file.readlines()

# Kicseréli a 'dl=0'-t 'raw=1'-re minden linkben
new_links = [link.replace("&dl=0", "&raw=1").strip() for link in links]

# Eredmény kimentése egy új txt fájlba
with open("output_links.txt", "w") as file:
    for new_link in new_links:
        file.write(new_link + "\n")

print("A linkek sikeresen kimentésre kerültek az 'output_links.txt' fájlba.")
