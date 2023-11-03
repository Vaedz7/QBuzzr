from bs4 import BeautifulSoup
import requests

root_url="https://aseemsdb.me/static/packet_archive/"
hs_url="https://aseemsdb.me/static/packet_archive/HS/"
ms_url="https://aseemsdb.me/static/packet_archive/MS/"
clg_url="https://aseemsdb.me/static/packet_archive/Collegiate/"
arch_url="https://aseemsdb.me/static/packet_archive/Archived/"

def get_directory(url):
  page = requests.get(url).text
  soup = BeautifulSoup(page, 'html.parser')
  cont = [node.get('href') for node in soup.find_all('a') if node.get('href').endswith("/")]
  clean_cont=[]
  for i in cont[1:]:
    clean_cont.append(i[:-1])
  return clean_cont

def get_packets(url):
  cont=get_directory(url)
  packets=[]
  for i in cont:
    name=i[5:].split("_")
    name=" ".join(name)
    year=i[0:4]
    packets.append([name, year])
  return packets

def filter_packets(url, filter):
  packets=get_packets(url)
  filtered=[]
  for set in packets:
    if filter in set[0]:
      filtered.append(set)
  return filtered

def print_packets(list):
  for item in list:
    print("Packet: "+item[0]+" | Year: "+item[1])
