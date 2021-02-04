// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/songs.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [{
  name: "Sing me to sleep",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3"
}, {
  name: "Fade-NCS Release",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "She-NCS Release",
  author: "Andromedik",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "About you-NCS Release",
  author: "Ascence",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741547203002389/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "On & On (feat. Daniel Levi) [NCS Release]",
  author: "Cartoon",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Why We Lose (feat. Coleman Trapp) [NCS Release]",
  author: "Cartoon",
  url: "https:/222/cdn.discordapp.com/attachments/775740994595323954/775741555301810196/Cartoon_-_Why_We_Lose_feat._Coleman_Trapp_NCS_RMP3_160K.mp3"
}, {
  name: "Castle [NCS Release]",
  author: "Clarx & Harddope",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741580619284540/Clarx___Harddope_-_Castle_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Invincible [NCS Release]",
  author: "DEAF KEV ",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3"
}, {
  name: " Blank [NCS Release]",
  author: "Disfigure",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669588205598/Disfigure_-_Blank_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Nekozilla [NCS Release]",
  author: "Different Heaven",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Savannah (feat. Philly K) [NCS Release]",
  author: "Diviners",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Cloud 9 [NCS Release]",
  author: "Itro & Tobu",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741836018974740/Itro___Tobu_-_Cloud_9_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Sky High [NCS Release]",
  author: "Elektronomia",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Where'd You Go (feat. Luna Lark) [NCS Release]",
  author: "Julius Dreisig",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3"
}, {
  name: "Island [NCS BEST OF]",
  author: "Jarico",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741836840665158/Jarico_-_Island_NCS_BEST_OFMP3_160K.mp3"
}, {
  name: "Heroes Tonight (feat. Johnning) [NCS BEST OF]",
  author: "Janji",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741837385793556/Janji_-_Heroes_Tonight_feat._Johnning_NCS_ReleaMP3_160K.mp3"
}, {
  name: "Landscape (Vlog No Copyright Music)",
  author: "Janji",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741839517024256/Jarico_-_Landscape_NCS_BEST_OFMP3_160K.mp3"
}, {
  name: "Chasing Dreams [NCS Release]",
  author: "Jim Yosef & Valentina Franco",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741840136994846/Jim_Yosef___Valentina_Franco_-_Chasing_Dreams_NCSMP3_160K.mp3"
}, {
  name: "Link [NCS Release]",
  author: "Jim Yosef",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741840224813096/Jim_Yosef_-_Link_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Symbolism [NCS Release]",
  author: "Electro-Light",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741841010065418/Electro-Light_-_Symbolism_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Invisible [NCS Release]",
  author: "Julius Dreisig & Zeus X Crona",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741873582899230/Julius_Dreisig___Zeus_X_Crona_-_Invisible_NCS_RelMP3_160K.mp3"
}, {
  name: "Earth [NCS Release]",
  author: "K-391",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741894939901992/K-391_-_Earth_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Harpuia [NCS Release]",
  author: "Kadenza ",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741906344869928/Kadenza_-_Harpuia_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Dreams [NCS Release]",
  author: "Lost Sky",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741919178653716/Lost_Sky_-_Dreams_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Fearless pt.II (feat. Chris Linton) [NCS Release]",
  author: "Lost Sky",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741949998399572/Lost_Sky_-_Fearless_pt.II_feat._Chris_Linton_NCMP3_160K.mp3"
}, {
  name: "Ark [NCS Release]",
  author: "Ship Wrek & Zookeepers",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741988191338526/Ship_Wrek___Zookeepers_-_Ark_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Where We Started (feat. Jex) [NCS Release]",
  author: "Lost Sky",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741989177524264/Lost_Sky_-_Where_We_Started_feat._Jex_NCS_ReleaMP3_160K.mp3"
}, {
  name: "Cradles [NCS Release]",
  author: "Sub Urban",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775741999978250250/Sub_Urban_-_Cradles_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Feel Good [NCS Release]",
  author: "Syn Cole",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775742022085771278/Syn_Cole_-_Feel_Good_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Why Do I? (feat. Bri Tolani) [NCS",
  author: "Unknown Brain",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775742053337268224/Unknown_Brain_-_Why_Do_I__feat._Bri_Tolani_NCSMP3_160K.mp3"
}, {
  name: "Infinite [NCS Release]",
  author: "Valence",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775742064893755402/Valence_-_Infinite_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Mortals (feat. Laura Brehm) [NCS Release]",
  author: "Warriyo",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/775742084321509437/Warriyo_-_Mortals_feat._Laura_Brehm_NCS_ReleaseMP3_160K.mp3"
}, {
  name: "Alone",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782126454690938890/Alan_Walker_-_AloneMP3_128K.mp3"
}, {
  name: "Look At Her Now",
  author: "Selena Gomez",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782128984070029322/Selena_Gomez_-_Look_At_Her_Now_Official_Music_VidMP3_128K.mp3"
}, {
  name: "I m Fakin",
  author: "Sabrina Carpenter",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129209711001610/Sabrina_Carpenter_-_I_m_Fakin_Audio_OnlyMP3_128K.mp3"
}, {
  name: "Sing me to sleep",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129242318176266/Alan_Walker_-_Sing_Me_To_SleepMP3_128K.mp3"
}, {
  name: "End of time",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129275322761236/K-391__Alan_Walker___Ahrix_-_End_of_Time_OfficialMP3_128K.mp3"
}, {
  name: "Faded",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129443250503720/Alan_Walker_-_FadedMP3_128K.mp3"
}, {
  name: "The Spectre",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129468789358593/Alan_Walker_-_The_SpectreMP3_128K.mp3"
}, {
  name: "Freal Luv",
  author: "Far East Movement x Marshmello ft Chanyeol Tinashe",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129488972480532/Far_East_Movement_x_Marshmello_-_Freal_Luv_ft._Chanyeol__Tinashe_Official_Video.m4a"
}, {
  name: "Let Me Love You",
  author: "DJ Snake ft Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129492180860928/DJ_Snake_-_Let_Me_Love_You_ft._Justin_Bieber_OffiMP3_128K.mp3"
}, {
  name: "Let Me Love You",
  author: "DJ Snake ft Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129492180860928/DJ_Snake_-_Let_Me_Love_You_ft._Justin_Bieber_OffiMP3_128K.mp3"
}, {
  name: "Here With Me Feat",
  author: "Marshmello",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129612690948106/Marshmello_-_Here_With_Me_Feat._CHVRCHES_OfficialMP3_160K.mp3"
}, {
  name: "Échame La Culpa",
  author: "Luis Fonsi, Demi Lovato",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129660301279252/Luis_Fonsi__Demi_Lovato_-_Echame_La_Culpa_Video_OMP3_128K.mp3"
}, {
  name: "Slow Down",
  author: "Selena Gomez",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129669578424330/Selena_Gomez_-_Slow_Down_OfficialMP3_128K.mp3"
}, {
  name: "On my Way",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129671055605760/Alan_Walker__Sabrina_Carpenter___Farruko_-_On_MyMP3_128K.mp3"
}, {
  name: "Summer",
  author: "Marshmello",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129702650773544/Marshmello_-_Summer_Official_Music_Video_with_LeMP3_160K.mp3"
}, {
  name: "Can't Blame a Girl for Trying",
  author: "Sabrina Carpenter",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129754987692082/Sabrina_Carpenter_-_Can_t_Blame_a_Girl_for_TryingMP3_160K.mp3"
}, {
  name: "Baby",
  author: "Justin Bieber ft Ludacris",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129781373272084/Justin_Bieber_-_Baby_ft._Ludacris_Official_MusicMP3_128K.mp3"
}, {
  name: "Love You Like a Love Song",
  author: "Selena Gomez",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129797354618880/Selena_Gomez___The_Scene_-_Love_You_Like_A_Love_SoMP3_128K.mp3"
}, {
  name: "We don't talk anymore",
  author: "Charlie Puth",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129797403770900/Charlie_Puth_-_We_Don_t_Talk_Anymore_feat._SelenaMP3_128K.mp3"
}, {
  name: "Despacito",
  author: "Justin Bieber & Luis foni ",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129852181381121/Justin_Bieber_Despacito_Lyrics_--_ft._Luis_FonMP3_128K.mp3"
}, {
  name: "Yummy",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129879637950464/Justin_Bieber_-_Yummy_Official_VideoMP3_128K.mp3"
}, {
  name: "PLAY",
  author: "Alan Walker ft Tungevaag",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129886810603530/Alan_Walker__K-391__Tungevaag__Mangoo_-_PLAY_AlanMP3_160K.mp3"
}, {
  name: "Girls Like You",
  author: "Maroon 5",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129896729214982/Maroon_5_-_Girls_Like_You_Lyrics_ft._Cardi_BMP3_128K.mp3"
}, {
  name: "Alone pt II/2 ",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129915348385822/Alan_Walker___Ava_Max_-_Alone__Pt._IIMP3_128K.mp3"
}, {
  name: "Mistletoe",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129951695962142/Justin_Bieber_-_Mistletoe_Official_Music_VideoMP3_160K.mp3"
}, {
  name: "Me Necesita",
  author: "PRETTYMUCH, CNCO",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129959174012928/PRETTYMUCH__CNCO_-_Me_Necesita_Official_VideoMP3_160K.mp3"
}, {
  name: "Senorita",
  author: "Shawn_Mendes,Camila_Cabello",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782129973439102986/Shawn_Mendes__Camila_Cabello_-_Senorita_LyricsMP3_160K.mp3"
}, {
  name: "Ghost",
  author: "Au/Ra, Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130010088669204/Au_Ra__Alan_Walker_-_Ghost_Official_VideoMP3_160K.mp3"
}, {
  name: "Sorry",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130017793998848/Justin_Bieber_-_Sorry_Official_Lyric_VideoMP3_160K.mp3"
}, {
  name: "I'll Show You",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130047695585310/Justin_Bieber_-_I_ll_Show_You_Official_Music_VideMP3_160K.mp3"
}, {
  name: "Alone",
  author: "Marshmello",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130063050014732/Marshmello_-_Alone_Official_Music_VideoMP3_160K.mp3"
}, {
  name: "Liar",
  author: "Camila Cabello",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130071020371978/Camila_Cabello_-_Liar_LyricsMP3_160K.mp3"
}, {
  name: "Strongest",
  author: "Alan Walker ,Ina Wroldsen",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130079047221268/Alan_Walker___Ina_Wroldsen_-_Strongest_LyricsMP3_160K.mp3"
}, {
  name: "My Oh My",
  author: "Camila Cabello, DaBaby",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130082893398036/Camila_Cabello_-_My_Oh_My_Lyrics_ft._DaBabyMP3_160K.mp3"
}, {
  name: "Believer",
  author: "Imagine Dragon",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130083555966986/Imagine_Dragons_-_Believer_LyricsMP3_160K.mp3"
}, {
  name: "Heading Home",
  author: "Alan Walker ,Ruben",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130090208133120/Alan_Walker___Ruben_Heading_Home_Official_MusicMP3_160K.mp3"
}, {
  name: "Company",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130102266757120/Justin_Bieber_-_Company_Official_Music_VideoMP3_160K.mp3"
}, {
  name: "Sorry (PURPOSE : The Movement)",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130111000477756/Justin_Bieber_-_Sorry_PURPOSE___The_MovementMP3_160K.mp3"
}, {
  name: "Bad Boys for Life",
  author: "Ritmo",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130127374385162/RITMO_Bad_Boys_For_Life_Remix___Official_MusiMP3_160K.mp3"
}, {
  name: "Lost Control",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130131912228874/Alan_Walker_Lost_Control_Lyrics_ft._SoranaMP3_160K.mp3"
}, {
  name: "Closer",
  author: "The Chainsmokers",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130132722384907/The_Chainsmokers_-_Closer_Lyric_ft._HalseyMP3_128K.mp3"
}, {
  name: "Shameless",
  author: "Camila Cabello",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130170789101578/Camila_Cabello_-_ShamelessMP3_160K.mp3"
}, {
  name: "Unity",
  author: "Alan Walker",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130173805985792/Alan_x_Walkers_-_UnityMP3_160K.mp3"
}, {
  name: "One Less Lonely Girl",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130199692443678/Justin_Bieber_-_One_Less_Lonely_Girl_Official_MusMP3_160K.mp3"
}, {
  name: "Together",
  author: "Marshmello",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130204519694336/Marshmello_-_Together_Official_Music_VideoMP3_160K.mp3"
}, {
  name: "Come & Get It",
  author: "Selena Gomez",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130215966605332/Selena_Gomez_-_Come___Get_ItMP3_128K.mp3"
}, {
  name: "Boy With Luv",
  author: "BTS",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130258811289620/BTS____Boy_With_Luv_feat._HalMP3_160K.mp3"
}, {
  name: "Rockabye",
  author: "Clean Bandit",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130262342893618/Clean_Bandit_-_Rockabye_feat._Sean_Paul___Anne-MaMP3_160K.mp3"
}, {
  name: "Blank Space",
  author: "Taylor Swift",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130294697885696/Taylor_Swift_-_Blank_SpaceMP3_160K.mp3"
}, {
  name: "What Do You Mean",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130340311203840/Justin_Bieber_-_What_Do_You_Mean__Official_MusicMP3_160K.mp3"
}, {
  name: "As Long As You Love Me",
  author: "Justin Bieber",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130390810230824/Justin_Bieber_-_As_Long_As_You_Love_Me_ft._Big_SeaMP3_160K.mp3"
}, {
  name: "Confident",
  author: "Justin Bieber ft. Chance The Rapper - YouTube",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130398385143818/Justin_Bieber_-_Confident_ft._Chance_The_Rapper_OMP3_160K.mp3"
}, {
  name: "Intentions",
  author: "Justin Bieber ft. Quavo",
  url: "https://cdn.discordapp.com/attachments/775740994595323954/782130437514067998/Justin_Bieber_-_Intentions_ft._Quavo_Official_VidMP3_160K.mp3"
}];
},{}],"src/script.ts":[function(require,module,exports) {
"use strict";

var __awaiter = this && this.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = this && this.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [op[0] & 2, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var songs_1 = __importDefault(require("./songs"));

$(document).ready(function () {
  var audioElement = document.createElement('audio');
  var CurrentSong = {};
  var Queue = [];
  var loop = false;

  function nextSong() {
    var data = songs_1.default[Math.floor(Math.random() * songs_1.default.length)];
    audioElement.setAttribute('src', data.url);
    CurrentSong = data;
    toast(CurrentSong.name + " by " + CurrentSong.author + " has been added to queue");
    audioElement.play();
  }

  nextSong();
  audioElement.addEventListener('ended', function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        if (loop) {
          audioElement.play();
          toast("Started playing " + CurrentSong.name + " by " + CurrentSong.author);
          return [2
          /*return*/
          ];
        } else if (Queue[0]) {
          audioElement.setAttribute('src', Queue[0].url);
          CurrentSong = Queue[0];
          Queue.shift();
        } else nextSong();

        audioElement.play();
        toast("Started playing " + CurrentSong.name + " by " + CurrentSong.author);
        QueueEvent();
        return [2
        /*return*/
        ];
      });
    });
  }, false);

  function toast(text) {
    $('#snackbar').text(text);
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  }

  audioElement.autoplay = true;
  audioElement.addEventListener("canplay", function () {
    $("#songName").text(CurrentSong.name);
    $("#songAuthor").text("By " + CurrentSong.author);
    $("#songStatus").text("Status: Ready to play");
    $('#songDuration').text("Duration: " + Math.round(audioElement.duration) + " seconds");
    $('#songStatusBar').attr("data-value", "1");
    $('#songStatusBar').attr("data-total", Math.round(audioElement.duration).toString());
    $("#songCurrentSecond").text("Not Playing, Press play!");
    QueueEvent();
  });
  audioElement.addEventListener("timeupdate", function () {
    $("#songName").text(CurrentSong.name);
    $("#songAuthor").text("By " + CurrentSong.author);
    $("#songStatus").text("Status: Playing");
    $('#songDuration').text("Duration: " + Math.round(audioElement.duration) + " seconds");
    $('#songStatusBar').attr("data-value", Math.round(audioElement.currentTime)); //@ts-ignore because this is semantic ui method

    $('#songStatusBar').progress({
      total: Math.round(audioElement.duration),
      value: Math.round(audioElement.currentTime)
    });
    $('#songStatusBar').attr("data-total", Math.round(audioElement.duration).toString());
    $("#songCurrentSecond").text("Current Second: " + Math.round(audioElement.currentTime));
  });

  function triggerLoop() {
    if (loop === false) loop = true;else loop = false;
    $("#songLoop").text(loop ? "Loop: Enabled" : "Loop: Disabled");
    toast(loop ? "Loop has been successfully Enabled" : "Loop has been successfully Disabled");
  }

  $.get("/songs", function (data) {
    data.forEach(function (song, index) {
      $("#SongsListArea").append("<tr><td class='center aligned'>" + (index + 1) + "</td><td class='center aligned'>" + song.name + "</td><td class='center aligned'>" + song.author + "</td></tr>");
    });
  }); // Button Click Events

  $("#playButton").click(function () {
    audioElement.play();
    $("#songStatus").text("Status: Playing");
    toast("Started Playing!");
  });
  $("#pauseButton").click(function () {
    audioElement.pause();
    $("#songStatus").text("Status: Paused");
    toast("Paused the music!");
  });
  $("#restartButton").click(function () {
    audioElement.currentTime = 0;
    toast("Current song has been successfully restarted!");
  });
  $("#loopButton").click(function () {
    triggerLoop();
  });
  $("#songsListButton").click(function () {
    //@ts-ignore because this is semantic ui method
    $('.ui.modal').modal('show');
  });
  $("#nextButton").click(function () {
    nextSong();
  }); //Custom Play/Queue

  $("#CustomPlayButton").click(function () {
    var SongID = $("#customSongInput").val().toString();
    if (!SongID) return toast("Song ID not provided");else if (!SongID.length) return toast("Song ID not provided");else if (SongID.length < 0) return toast("Song ID not provided");else if (!parseInt(SongID)) return toast("Song ID is not a number");else {
      var xd = "/song/" + (parseInt(SongID) - 1);
      $.get(xd, function (data) {
        if (data === "404") return toast("Song not found!");else {
          CurrentSong = data;
          audioElement.setAttribute('src', data.url);
          audioElement.play();
          toast("Started playing " + CurrentSong.name + " by " + CurrentSong.author);
        }
      });
    }
  });
  $("#CustomQueueButton").click(function () {
    var SongID = $("#customSongInput").val().toString();
    if (!SongID) return toast("Song ID not provided");else if (!SongID.length) return toast("Song ID not provided");else if (SongID.length < 0) return toast("Song ID not provided");else if (!parseInt(SongID)) return toast("Song ID is not a number");else {
      var xd = "/song/" + (parseInt(SongID) - 1);
      $.get(xd, function (data) {
        if (data === "404") return toast("Song not found!");else {
          Queue.push(data);
          toast(data.name + " has been added to queue");
          QueueEvent();
        }
      });
    }
  });
  QueueEvent();

  function QueueEvent() {
    console.log(Queue);

    if (Queue.length > 0) {
      var things = Queue.map(function (a) {
        return '<div class="ui centered card"><div class="content"><div class="header">' + a.name + '</div><div class="meta">by ' + a.author + '</div></div></div>';
      }).join("\n");
      console.log(things);
      $("#AllSongsQueue").replaceWith(things);
    } else if (Queue.length <= 0) {
      $('<div class="ui centered card"><div class="content"><div class="header">Empty Queue</div><div class="meta">No Songs to play next, So it choose a random song next!</div></div></div>').replaceAll("#AllSongsQueue");
    }
  }

  $("#DiscordButton").click(function () {
    window.open("https://discord.gg/JZjbCTWjqM");
  });
  $("#YouTubeButton").click(function () {
    window.open("https://www.youtube.com/channel/UCe21_ExA95OMEQZXco8dPmQ?sub_confirmation=1");
  });
});
},{"./songs":"src/songs.ts"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "41965" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","src/script.ts"], null)
//# sourceMappingURL=/script.66fca108.js.map