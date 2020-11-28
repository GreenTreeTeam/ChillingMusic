const songs = [
    {
        name: "Sing me to sleep",
        author: "Alan Walker",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741533789224960/Alan_Walker_-_Sing_Me_To_SleepMP3_160K.mp3"
    },
    {
        name: "Fade-NCS Release",
        author: "Alan Walker",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741536591806484/Alan_Walker_-_Fade_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "She-NCS Release",
        author: "Andromedik",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741544149549096/Andromedik_-_SHE_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "About you-NCS Release",
        author: "Ascence",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741547203002389/Ascence_-_About_You_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "On & On (feat. Daniel Levi) [NCS Release]",
        author: "Cartoon",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741549177995264/Cartoon_-_On___On_feat._Daniel_Levi_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Why We Lose (feat. Coleman Trapp) [NCS Release]",
        author: "Cartoon",
        url: "https:/222/cdn.discordapp.com/attachments/775740994595323954/775741555301810196/Cartoon_-_Why_We_Lose_feat._Coleman_Trapp_NCS_RMP3_160K.mp3"
    },
    {
        name: "Castle [NCS Release]",
        author: "Clarx & Harddope",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741580619284540/Clarx___Harddope_-_Castle_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Invincible [NCS Release]",
        author: "DEAF KEV ",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741667210035220/DEAF_KEV_-_Invincible_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: " Blank [NCS Release]",
        author: "Disfigure",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669588205598/Disfigure_-_Blank_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Nekozilla [NCS Release]",
        author: "Different Heaven",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Savannah (feat. Philly K) [NCS Release]",
        author: "Diviners",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741669626085426/Different_Heaven_-_Nekozilla_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Cloud 9 [NCS Release]",
        author: "Itro & Tobu",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741836018974740/Itro___Tobu_-_Cloud_9_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Sky High [NCS Release]",
        author: "Elektronomia",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741836152668201/Elektronomia_-_Sky_High_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Where'd You Go (feat. Luna Lark) [NCS Release]",
        author: "Julius Dreisig",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741837642170382/Julius_Dreisig_-_Where_d_You_Go_feat._Luna_LarkMP3_160K.mp3"
    },
    {
        name: "Island [NCS BEST OF]",
        author: "Jarico",
        url:
            "https://cdn.discordapp.com/attachments/775740994595323954/775741836840665158/Jarico_-_Island_NCS_BEST_OFMP3_160K.mp3"
    },
    {
        name: "Heroes Tonight (feat. Johnning) [NCS BEST OF]",
        author: "Janji",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741837385793556/Janji_-_Heroes_Tonight_feat._Johnning_NCS_ReleaMP3_160K.mp3"
    },
    {
        name: "Landscape (Vlog No Copyright Music)",
        author: "Janji",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741839517024256/Jarico_-_Landscape_NCS_BEST_OFMP3_160K.mp3"
    },
    {
        name: "Chasing Dreams [NCS Release]",
        author: "Jim Yosef & Valentina Franco",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741840136994846/Jim_Yosef___Valentina_Franco_-_Chasing_Dreams_NCSMP3_160K.mp3"
    },
    {
        name: "Link [NCS Release]",
        author: "Jim Yosef",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741840224813096/Jim_Yosef_-_Link_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Symbolism [NCS Release]",
        author: "Electro-Light",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741841010065418/Electro-Light_-_Symbolism_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Invisible [NCS Release]",
        author: "Julius Dreisig & Zeus X Crona",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741873582899230/Julius_Dreisig___Zeus_X_Crona_-_Invisible_NCS_RelMP3_160K.mp3"
    },
    {
        name: "Earth [NCS Release]",
        author: "K-391",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741894939901992/K-391_-_Earth_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Harpuia [NCS Release]",
        author: "Kadenza ",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741906344869928/Kadenza_-_Harpuia_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Dreams [NCS Release]",
        author: "Lost Sky",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741919178653716/Lost_Sky_-_Dreams_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Fearless pt.II (feat. Chris Linton) [NCS Release]",
        author: "Lost Sky",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741949998399572/Lost_Sky_-_Fearless_pt.II_feat._Chris_Linton_NCMP3_160K.mp3"
    },
    {
        name: "Ark [NCS Release]",
        author: "Ship Wrek & Zookeepers",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741988191338526/Ship_Wrek___Zookeepers_-_Ark_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Where We Started (feat. Jex) [NCS Release]",
        author: "Lost Sky",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741989177524264/Lost_Sky_-_Where_We_Started_feat._Jex_NCS_ReleaMP3_160K.mp3"
    },
    {
        name: "Cradles [NCS Release]",
        author: "Sub Urban",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775741999978250250/Sub_Urban_-_Cradles_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Feel Good [NCS Release]",
        author: "Syn Cole",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775742022085771278/Syn_Cole_-_Feel_Good_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Why Do I? (feat. Bri Tolani) [NCS",
        author: "Unknown Brain",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775742053337268224/Unknown_Brain_-_Why_Do_I__feat._Bri_Tolani_NCSMP3_160K.mp3"
    },
    {
        name: "Infinite [NCS Release]",
        author: "Valence",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775742064893755402/Valence_-_Infinite_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Mortals (feat. Laura Brehm) [NCS Release]",
        author: "Warriyo",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/775742084321509437/Warriyo_-_Mortals_feat._Laura_Brehm_NCS_ReleaseMP3_160K.mp3"
    },
    {
        name: "Alone",
        author: "Alan Walker",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782126454690938890/Alan_Walker_-_AloneMP3_128K.mp3"
    },
    {
        name: "Look At Her Now",
        author: "Selena Gomez",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782128984070029322/Selena_Gomez_-_Look_At_Her_Now_Official_Music_VidMP3_128K.mp3"
    },
    {
        name: "I m Fakin",
        author: "Sabrina Carpenter",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129209711001610/Sabrina_Carpenter_-_I_m_Fakin_Audio_OnlyMP3_128K.mp3"
    },
    {
        name: "Sing me to sleep",
        author: "Alan Walker",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129242318176266/Alan_Walker_-_Sing_Me_To_SleepMP3_128K.mp3"
    },
    {
        name: "End of time",
        author: "Alan Walker",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129275322761236/K-391__Alan_Walker___Ahrix_-_End_of_Time_OfficialMP3_128K.mp3"
    },
    {
        name: "Faded",
        author: "Alan Walker",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129443250503720/Alan_Walker_-_FadedMP3_128K.mp3"
    },
    {
        name: "The Spectre",
        author: "Alan Walker",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129468789358593/Alan_Walker_-_The_SpectreMP3_128K.mp3"
    },
    {
        name: "Freal Luv",
        author: "Far East Movement x Marshmello ft Chanyeol Tinashe",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129488972480532/Far_East_Movement_x_Marshmello_-_Freal_Luv_ft._Chanyeol__Tinashe_Official_Video.m4a"
    },
    {
        name: "Let Me Love You",
        author: "DJ Snake ft Justin Bieber",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129492180860928/DJ_Snake_-_Let_Me_Love_You_ft._Justin_Bieber_OffiMP3_128K.mp3"
    },
    {
        name: "Let Me Love You",
        author: "DJ Snake ft Justin Bieber",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129492180860928/DJ_Snake_-_Let_Me_Love_You_ft._Justin_Bieber_OffiMP3_128K.mp3"
    },
    {
        name: "Here With Me Feat",
        author: "Marshmello",
        url: "https://cdn.discordapp.com/attachments/775740994595323954/782129612690948106/Marshmello_-_Here_With_Me_Feat._CHVRCHES_OfficialMP3_160K.mp3"
    },
];

module.exports = songs;