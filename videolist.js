// JSON betöltése JS objektumként (itt be van építve, de lehet fetch-csel is dolgozni)
const videoData = [
  {
    Név: "Mindent látok és megjegyzek",
    link: "https://www.youtube.com/watch?v=IlohPlOmrOs",
    Thumbnail: "img/Thumbnails/2022_1.png",
    Embed:
      '<div style="position:relative; padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/IlohPlOmrOs" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Mindent látok és megjegyzek"></iframe></div>',
  },
  {
    Név: "Homokvár építő verseny",
    link: "https://www.youtube.com/watch?v=kJrKJONgfUo",
    Thumbnail: "img/Thumbnails/2022_2.png",
    Embed:
      '<div style="position:relative; padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/kJrKJONgfUo" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Homokvár épít? verseny"></iframe></div>',
  },
  {
    Név: "Magic forrest",
    link: "https://www.youtube.com/watch?v=6_uLTHdzcCg",
    Thumbnail: "img/Thumbnails/2023_3.png",
    Embed:
      '<div style="position:relative; padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/6_uLTHdzcCg" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Magic forrest"></iframe></div>',
  },
  {
    Név: "Kiborg asszisztens",
    link: "https://player.vimeo.com/video/1078632188",
    Thumbnail: "img/Thumbnails/2023_4.png",
    Embed:
      '<div style="padding:42.19% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1078632188?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="KollárGergő_Kiborg_asszisztens"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  {
    Név: "Társadalmi célú hirdetés - Innováció",
    link: "https://www.youtube.com/watch?v=aXVqpbkdRjo",
    Thumbnail: "img/Thumbnails/2023_5.png",
    Embed:
      '<div style="position:relative; padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/aXVqpbkdRjo" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Társadalmi célú hirdetés - Innováció"></iframe></div>',
  },
  {
    Név: "Látványtan - Önbemutató - Én magam",
    link: "https://www.youtube.com/watch?v=lQU8yAYfCkI",
    Thumbnail: "img/Thumbnails/2023_6.png",
    Embed:
      '<div style="position:relative; padding-top:56.25%;"><iframe src="https://www.youtube.com/embed/lQU8yAYfCkI" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen title="Látványtan - Önbemutató - Én magam"></iframe></div>',
  },
  {
    Név: "Kisfilm - ma is elsétált az idő",
    link: "https://player.vimeo.com/video/1078632147",
    Thumbnail: "img/Thumbnails/2023_7.png",
    Embed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1078632147?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="20221207_kollar_gergo_kisfilm"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  {
    Név: "Reklám Spot - MatekOS",
    link: "https://player.vimeo.com/video/1078632434",
    Thumbnail: "img/Thumbnails/2024_8.png",
    Embed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1078632434?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="KollarGergo_ProdukciósIsmeretekÉsUtómunka_ReklamSpot"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  {
    Név: "Produkciós ismeretek és utómunka - Opening",
    link: "https://player.vimeo.com/video/1078632339",
    Thumbnail: "img/Thumbnails/2024_9.png",
    Embed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1078632339?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="KollarGergo_ProdukciósIsmeretekÉsUtómunka_Opening"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
  {
    Név: "FEATHER - installáció - Dokumentáció",
    link: "https://player.vimeo.com/video/1078632457",
    Thumbnail: "img/Thumbnails/2024_10.png",
    Embed:
      '<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1078632457?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="MediaDesign_4_FEATHER_Dokumentacio_video_NOAUDIO"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>',
  },
];

// DOM elemek
const listContainer = document.getElementById("videoList");
const iframeContainer = document.getElementById("iframe");

// Év kiszedése a thumbnail nevéből
function getYearFromThumbnail(thumbnail) {
  const match = thumbnail.match(/(\d{4})_/);
  return match ? match[1] : "Egyéb";
}

// Csoportosítás év szerint
const videosByYear = {};
videoData.forEach((video) => {
  const year = getYearFromThumbnail(video.Thumbnail);
  if (!videosByYear[year]) {
    videosByYear[year] = [];
  }
  videosByYear[year].push(video);
});

// Megjelenítés év szerint, növekvő sorrendben
Object.keys(videosByYear)
  .sort()
  .forEach((year) => {
    const header = document.createElement("h3");
    header.className = "w-100 mb-4 mt-4";
    header.textContent = year;
    listContainer.appendChild(header);

    videosByYear[year].forEach((video) => {
      const li = document.createElement("li");
      li.className = "border-top border-white py-2";

      const a = document.createElement("a");
      a.href = "#";
      a.innerHTML = `<img src="${video.Thumbnail}" alt="" /> ${video.Név}`;
      a.addEventListener("click", (e) => {
        e.preventDefault();
        // Videó beillesztése
        iframeContainer.innerHTML = video.Embed;

        // Háttér beállítása CSAK ha desktop nézet (szélesebb mint 900px)
        if (window.innerWidth > 900) {
          document.body.style.backgroundImage = `url('${video.Thumbnail}')`;
          document.body.style.backgroundSize = "cover";
          document.body.style.backgroundPosition = "center";
          document.body.style.backgroundRepeat = "no-repeat";
        }
      });

      li.appendChild(a);
      listContainer.appendChild(li);
    });
  });
