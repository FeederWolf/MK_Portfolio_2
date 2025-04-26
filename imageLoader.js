// A képek adatai
const imageGroups = {
  2022: [
    "https://www.dropbox.com/scl/fi/y8xqec5nt5egk7r1fnrk1/5_1.png?rlkey=zgjb4scugcjxsglewi9loda6c&st=v0r2tzy5&raw=1",
    "https://www.dropbox.com/scl/fi/0o9u0t1qxb53mz9hcmq2i/11.png?rlkey=m04uvxioafqntur0gg7bk0khh&st=ke1ly12f&raw=1",
    "https://www.dropbox.com/scl/fi/pt97b2v35iesk3d0v8ymz/Cartoon.png?rlkey=wrqtxqvpfre1kyj2aospqr3cn&st=gbw4ip2a&raw=1",
    "https://www.dropbox.com/scl/fi/pv0bqpu6fn5x2zqm4z0vt/cyber.png?rlkey=0uojzk9smol03r67urtb5ydff&st=469otyp6&raw=1",
    "https://www.dropbox.com/scl/fi/owrtagelum6wj0s0dr15d/Lolipop.png?rlkey=2vhmqji5k4ch4gp1lqjpkqx5c&st=g4qcsvpr&raw=1",
    "https://www.dropbox.com/scl/fi/q71zil1hsc4py4iw4cryc/Neon.png?rlkey=bikra1zb3qlg5p08a23urpf94&st=vlrje3w6&raw=1",
    "https://www.dropbox.com/scl/fi/qvm66ezd9p6uuh62w44gy/P_1.png?rlkey=0xgolauwp4978sab5f29dqv9e&st=sdhwcuvc&raw=1",
    "https://www.dropbox.com/scl/fi/qof5h89gp76c0mmd65dw7/P_2_1.png?rlkey=hq56q51zyu5on8wjwd98datfm&st=a484gknb&raw=1",
    "https://www.dropbox.com/scl/fi/hdxqfxu406nog0oowr8bh/P_6.png?rlkey=9sj5b7ulceq5u2szdcu8omzcf&st=93pkwo8a&raw=1",
    "https://www.dropbox.com/scl/fi/y7wz6tng0tk0bd3pvqr0h/P_7_1.png?rlkey=rvpvmtxzxdrx6r97gjdi9ad86&st=jvnay5ek&raw=1",
    "https://www.dropbox.com/scl/fi/w962ki00crj2bxqa9o5oe/P_8_2.png?rlkey=i1ez9qg9yllwgmvze55rzid6q&st=hqt36k9a&raw=1",
    "https://www.dropbox.com/scl/fi/nre1apjotdmf3dzhj46oa/P_9_1.png?rlkey=2bvl2ebbqz6unchnyetcy46lp&st=a4tf7zng&raw=1",
    "https://www.dropbox.com/scl/fi/2lcsm6c3hxndpdfrko6zx/P_10.png?rlkey=d9ycrm2k0lf7koawudiw2dywl&st=0gj99co3&raw=1",
    "https://www.dropbox.com/scl/fi/ht315yv9k86ntomnkcd6c/Utolso_viragszal.png?rlkey=uvlh3h6is3653qixkcqi13rok&st=2n8r7mjt&raw=1",
  ],
  2023: [
    "https://www.dropbox.com/scl/fi/x7lxrt3denwxlc2v77fem/emelet_better.png?rlkey=zvolxcs1szt2arj51582s493m&st=8kwk8h87&raw=1",
    "https://www.dropbox.com/scl/fi/5n1whclrm6nmk7od7nzip/KollarGergo_KSZI_Kiadvany_3.pdf?rlkey=dd3avimimtr9nsoy7v0gvps64&st=aalp7kux&raw=1",
    "https://www.dropbox.com/scl/fi/3b4gqi4aiuj9qgr4j0ob3/Koll-rGerg-_Vizu-lis-st-diumok_COVIDUt-niIskolai-let.png?rlkey=jmu33qn6x89g0yrbxfw23kh1h&st=g3win19s&raw=1",
    "https://www.dropbox.com/scl/fi/t5ugz22jz5c1tktjfopvr/Koll-rGerg-_Vizu-lis-st-diumok_Trollkod-s.png?rlkey=dv57fcpb9iubs0b81sm7ydzst&st=zktfeob6&raw=1",
    "https://www.dropbox.com/scl/fi/bdmgycvwwiphp4iuyvrrm/kukkermegaloba.jpg?rlkey=zetfvlomhsth8f5s4nav88j1r&st=vyxa6sdv&raw=1",
    "https://www.dropbox.com/scl/fi/ka6m2q5o0jmbkrijn8dot/Poster1_1.jpg?rlkey=jgeo6q5du9kna7maq8zb0z9e8&st=fbeeoomh&raw=1",
    "https://www.dropbox.com/scl/fi/kz0hmdtscrls75i4tm8ln/Poster1.jpg?rlkey=036lovdgopvx2hx6tqbtdobzy&st=zn8kqobn&raw=1",
    "https://www.dropbox.com/scl/fi/87yffk064vclrzvo6f0hu/Poster2_1.jpg?rlkey=pohn2sod3u374fkfdrg6se0c1&st=693iys3w&raw=1",
    "https://www.dropbox.com/scl/fi/9wp2oxg4kymh238t5b3pc/Poster2.jpg?rlkey=u3h0e67z1pptj5amaadllo2nv&st=1eb5mwmi&raw=1",
    "https://www.dropbox.com/scl/fi/448brmjvg33vmyma19bjr/Poster3_1.jpg?rlkey=rn9l8qrdkk23kotnknqfhaesw&st=p5rg5dg0&raw=1",
    "https://www.dropbox.com/scl/fi/vl6e7vbk0kqllqutivj9r/Poster3.jpg?rlkey=6vtgbiq2gprakgaohmap8im10&st=eb5j8ojj&raw=1",
    "https://www.dropbox.com/scl/fi/n51keby1xmmlce5qgs0gy/SZplakat_3.jpg?rlkey=oejwspbpv7343x8r4sj34odcr&st=ifnuglxs&raw=1",
    "https://www.dropbox.com/scl/fi/htk4m6owaqlrgnihs1ghu/SZplakat_4.jpg?rlkey=hzkc3f4ofvtafawqifvt11ewp&st=r3z8z5lo&raw=1",
  ],
  2024: [
    "https://www.dropbox.com/scl/fi/osr2o4zkfyqri1z9p50zq/20241203_142957.jpg?rlkey=czlz5hnp4bon65io4k3uojx4g&st=2yy3uq58&raw=1",
    "https://www.dropbox.com/scl/fi/ijlkemn3qm8klnf9l339t/20241203_142958.jpg?rlkey=v90nfhwdq144rxkkfovx21paj&st=vdzomr08&raw=1",
    "https://www.dropbox.com/scl/fi/2n8zvkc09iwck24qyuza6/20241203_143031.png?rlkey=54tw0ge4hqzg695bbwea3i64f&st=y6lu0dqp&raw=1",
    "https://www.dropbox.com/scl/fi/jq842wnueg7lxenqbki09/20241203_143032.png?rlkey=43jozpww9y48xr1v5k6892cnv&st=w7qcq4b9&raw=1",
    "https://www.dropbox.com/scl/fi/cy6g4bgp421q18szsyruy/20241203_143038.jpg?rlkey=5zkmtfe4jrqwmzmr0dxecfslo&st=7yxgt05x&raw=1",
    "https://www.dropbox.com/scl/fi/uydxo3dtol23273eu6grm/20241203_143056.jpg?rlkey=t8w3k6m0lamk5ae7n28jdgzl0&st=mp14tz0q&raw=1",
    "https://www.dropbox.com/scl/fi/osu453tjoctj8uhhwgqgc/20241203_143218.jpg?rlkey=uz6ds2nbf6xc8d89ychn8kbhy&st=qyubcmf8&raw=1",
    "https://www.dropbox.com/scl/fi/fc4se3ezrhni1lcwp0j31/20241203_143354.png?rlkey=75w7i4dq80fzch70wn2yqtcfq&st=4cxn9k0p&raw=1",
    "https://www.dropbox.com/scl/fi/o33tstwjk48dcu9ty2tnl/20241203_144555.png?rlkey=lvwh02ad3wokfov5cj7m8mvy0&st=hifpbmiu&raw=1",
    "https://www.dropbox.com/scl/fi/i0gr2ckjm5tuv81njcnuh/DSCF0003.png?rlkey=ndbghyoxj72avn27ozfi7zfhf&st=ur28kyqd&raw=1",
    "https://www.dropbox.com/scl/fi/kd0vpdingi7ozhxkg814f/DSCF0008.png?rlkey=jg6xu9rdabwmk41gwyz46dpgn&st=tep8jioz&raw=1",
    "https://www.dropbox.com/scl/fi/aw0lsojuwkocjvrhvi924/DSCF0010.png?rlkey=i6s4a54l0ytl1vprbfr0745pq&st=xp6qxkl8&raw=1",
    "https://www.dropbox.com/scl/fi/oinhokzllm5u8mtylj02w/DSCF0011.png?rlkey=c04nrjeb5ug13glmih8h0fl47&st=i8bnop8v&raw=1",
    "https://www.dropbox.com/scl/fi/x64p6bbmvoteocnpywz8v/DSCF0039_1.png?rlkey=ijyx6tfida78wrsjuishkhw9b&st=lxjai5nh&raw=1",
    "https://www.dropbox.com/scl/fi/kdytito41r2dbdt0ge1zv/DSCF0058.JPG?rlkey=hyawn0gsc9idl45sv2347yxil&st=937lc5qn&raw=1",
    "https://www.dropbox.com/scl/fi/0slosdhenoiu2einfs7e9/DSCF0061.JPG?rlkey=sp3oilfox66al024yj3vv0swd&st=abarex4x&raw=1",
    "https://www.dropbox.com/scl/fi/xcjcrl1f5iwd8w33clq1e/DSCF0077.JPG?rlkey=1kmz50tnbj1sjmjwe606f47xi&st=vj4u8x39&raw=1",
    "https://www.dropbox.com/scl/fi/vv3sy977uc0q77iewcugt/DSCF0088.JPG?rlkey=xpxwvs1nt8eh021gszgxyi6k8&st=1jikh8y9&raw=1",
    "https://www.dropbox.com/scl/fi/qkpk1np4yn0orb42s1in6/DSCF2870.JPG?rlkey=ci8fphzwlkbacuhybeyulijye&st=2orm51qz&raw=1",
    "https://www.dropbox.com/scl/fi/vut4j4e3c7chqrp3ad5l1/DSCF2916.JPG?rlkey=awsomzrneldwc93vpn8ocuzz2&st=ciwyfqhc&raw=1",
    "https://www.dropbox.com/scl/fi/o0ii628o1v5r6wsaqlpxb/GIF.gif?rlkey=iocamwy3u6gzrnodeiypnuzan&st=pkkh724c&raw=1",
    "https://www.dropbox.com/scl/fi/twpfe3dh0wcbquouusta9/IMG_20241031_0002.png?rlkey=3y9cu86x1rfdh57bh55rddz1a&st=zlf1mjtd&raw=1",
    "https://www.dropbox.com/scl/fi/dqcvhlvc5fge0acbp4hlc/IMG_20241031_0004.png?rlkey=aok5lt31wg1hr5xv4qox7wyiw&st=l3n8t7ls&raw=1",
    "https://www.dropbox.com/scl/fi/adusuqyciaq1arer8d7md/IMG_20241031_0005.png?rlkey=lvk9suc37xdk9zna1107os3qp&st=v6mbskja&raw=1",
    "https://www.dropbox.com/scl/fi/fbgp8zny9tjl0rph4u37a/KollarGergo_4_samplePages_page-0001.jpg?rlkey=eg4mkq7h165pb9h7ykp71vb5u&st=1bv7aszl&raw=1",
    "https://www.dropbox.com/scl/fi/1194hrtr23wtqvq0p7a8m/Koll-rGerg-_M-diaDesignTervez-s3_AranyBank-r_Storyboard_page-0001.jpg?rlkey=41cir8b49bo91lmk7en8w51i6&st=s4qdyp7x&raw=1",
    "https://www.dropbox.com/scl/fi/xtgw42ywyzhu2x8fz7dlr/Koll-rGerg-_M-diaDesignTervez-s3_AranyBank-r_Storyboard_page-0002.jpg?rlkey=1j7ou2mh5vm7l2qs8zq69hu8c&st=cr10mf26&raw=1",
    "https://www.dropbox.com/scl/fi/0sh3ya3oj18p7y4ecjnep/Koll-rGerg-_M-diaDesignTervez-s3_AranyBank-r_Storyboard_page-0003.jpg?rlkey=j7xlrm1oe25zn3rb571sp9vaf&st=haqry8rp&raw=1",
    "https://www.dropbox.com/scl/fi/xj4eydewqc3z7wexavznh/Koll-rGerg-_M-diaDesignTervez-s3_Cimer_1.png?rlkey=welz3bixsinporqzznm22v764&st=bj3sm95o&raw=1",
    "https://www.dropbox.com/scl/fi/8jh9vi7kdwc350ii5e6go/Koll-rGerg-_M-diaDesignTervez-s3_Cimer_2.png?rlkey=01kr7txxt760scz7mlecpp2fp&st=tzjz7d1r&raw=1",
    "https://www.dropbox.com/scl/fi/yg7wmk3jep3n6t4c64ibs/Koll-rGerg-_Tipogr-fia_FogalomP-rok_lusta_filc.png?rlkey=afhllmq6wt8zaeg8g5bn6wex1&st=s1z44u4n&raw=1",
    "https://www.dropbox.com/scl/fi/vfjt3dvjhzl1muuhs18nl/Koll-rGerg-_Tipogr-fia_FogalomP-rok_sz-p_szikla.png?rlkey=bw1a0r6wuebqkox41xwf3oobg&st=1cippqqj&raw=1",
    "https://www.dropbox.com/scl/fi/zjyirqwdao0f8ltnz1wu0/Koll-rGerg-_Tipogr-fia_K-zzelK-sz-tettTip-_2.png?rlkey=7gl9o51kz3i5zcaxagqgvpvo2&st=xy4han44&raw=1",
    "https://www.dropbox.com/scl/fi/9kw170umy0kbr6n3mtty4/Koll-rGerg-_Tipogr-fia_K-nyvBor-t-_1.png?rlkey=ngqd911owwyxhvs4g5yhvk1ez&st=qrs2q92u&raw=1",
    "https://www.dropbox.com/scl/fi/j5b2fcok1sab15di19sqa/Koll-rGerg-_Tipogr-fia_K-nyvBor-t-_2.png?rlkey=j3ihtxuzqed4lf50akt0v0g7d&st=pkupbfps&raw=1",
    "https://www.dropbox.com/scl/fi/5n3gm8xnshrkct7w8hdtm/Koll-rGerg-_TipoGr-fia_PaulaScher_Trafo.png?rlkey=5jjl6i2wr6ysoiq7mzefdmoq3&st=173uqy12&raw=1",
    "https://www.dropbox.com/scl/fi/qtd60n1c93pjkv31fhuyp/Koll-rGerg-_Tipogr-fia_Sz-K-p_Kirug.png?rlkey=rzl6wh574ph8gcpsf2zlz1iys&st=ubco6zod&raw=1",
    "https://www.dropbox.com/scl/fi/so3cjnhnput1wvdhxrmae/panorama_1.png?rlkey=wi3uvok7i88nfme7tzujt1zm5&st=gw7cky28&raw=1",
    "https://www.dropbox.com/scl/fi/pw5g10gc9a7l9qfhjmr43/panorama_2.png?rlkey=h333lb8jdg1g1rvmypwxm5iml&st=7aqpg9cw&raw=1",
  ],
};

// Megjelenítés
const worksOutput = document.getElementById("WorksOutput");

for (const year in imageGroups) {
  // Évszám kiírás
  const yearHeader = document.createElement("h3");
  yearHeader.className = "w-100 mb-4 border-top border-dark pt-5";
  yearHeader.id = year;
  yearHeader.innerText = year;
  worksOutput.appendChild(yearHeader);

  // Képek hozzáadása
  imageGroups[year].forEach((url) => {
    const div = document.createElement("div");
    div.className = "col-12 col-md-4 mb-4";

    const a = document.createElement("a");
    a.href = "#";
    a.className = "thumbnail-link";

    const img = document.createElement("img");
    img.src = url;
    img.alt = "";
    img.className = "img-fluid";

    a.appendChild(img);
    div.appendChild(a);
    worksOutput.appendChild(div);
  });
}

/*IMAGE REPLACE (FULLSCREEN)*/
document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("click", function (e) {
    // Ha az elemre vagy a szülő <a>-ra kattintottak
    const thumbnailLink = e.target.closest(".thumbnail-link");

    if (thumbnailLink && thumbnailLink.querySelector("img")) {
      e.preventDefault();

      const img = thumbnailLink.querySelector("img");
      const imgSrc = img.src;

      // Lecseréljük a ReplaceImage tartalmát
      const replaceDiv = document.getElementById("ReplaceImage");
      replaceDiv.innerHTML = `<img src="${imgSrc}" alt="Nagyított kép" class="img-fluid" />`;

      // Megjelenítjük az OpenImage részt
      document.getElementById("OpenImage").style.display = "block";
    }
  });
});
