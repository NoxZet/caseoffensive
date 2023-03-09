export type Weapon = 'cz75' | 'deagle' | 'duals' | '57' | 'glock18' | 'p2000' | 'p250' | 'r8' | 'tec9' | 'usps'
  | 'ak47' | 'aug' | 'awp' | 'famas' | 'g3sg1' | 'galil' | 'm4a1s' | 'm4a4' | 'scar20' | 'sg553' | 'ssg08'
  | 'mac10' | 'mp5sd' | 'mp7' | 'mp9' | 'ppbizon' | 'p90' | 'ump45'
  | 'mag7' | 'nova' | 'sawedoff' | 'xm1014' | 'm249' | 'negev'
  | 'bayonet' | 'm9bayonet' | 'gutk' | 'flipk' | 'karambit'
  | 'butterflyk' | 'huntsmank' | 'falchionk' | 'bowiek' | 'shadows'
  | 'talonk' | 'navajak' | 'stilettok' | 'ursusk'
  | 'classick' | 'nomadk' | 'paracordk' | 'skeletonk' | 'survivalk'
  | 'driverg' | 'handw' | 'hydrag' | 'motog' | 'specialg' | 'sportg' | 'fangg';
export function getWeaponDisplayName(weapon: Weapon) {
  switch (weapon) {
    case 'cz75': return 'CZ75-Auto';
    case 'deagle': return 'Desert Eagle';
    case 'duals': return 'Dual Berettas';
    case '57': return 'Five-SeveN';
    case 'glock18': return 'Glock-18';
    default: return weapon;
    //case '': return '';
  }
}
export type Quality = 'contraband' | 'covert' | 'classified' | 'restricted' | 'milspec' | 'industrial' | 'consumer';
type SkinVanilla = {
  weapon: Weapon,
  skin: string,
  quality: Quality,
  imgSrc: string,
};
type SkinWear = SkinVanilla & {
  wearMin: number,
  wearMax: number,
};
export type Skin = SkinVanilla | SkinWear;
import { ContainerCollection, GloveCollection, KnifeCollection } from "opening/collectionRegister";

export const collections: {[collName in (ContainerCollection | KnifeCollection | GloveCollection)]: Skin[]} = {
// Aug 2013 collections - all inactive since Nov 2013
// Except for Assault and Office also available in Operation Vanguard
assault:  [
  {
    "weapon": "glock18",
    "skin": "Fade",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aa_fade_light_large.61edcc69ff252d537a4dd14b016cbe826c26ae5b.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "mp9",
    "skin": "Bulldozer",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_so_yellow_light_large.dfa50bdf02bccb9002d09c891d41ba65b1ce2d9c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "aug",
    "skin": "Hot Rod",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_an_red_light_large.9adb894f02aff778fff9188a24eea1f0c8b66685.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "negev",
    "skin": "Anodized Navy",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_an_navy_light_large.5dafc320a35bc04e03bbe0c4e4b1b293398d1bda.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "57",
    "skin": "Candy Apple",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_so_red_light_large.29ae7b2264bd2a390ecf51a51293d2c2202fdea9.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "ump45",
    "skin": "Caramel",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_so_caramel_light_large.4883dbae989e9c61805aa53ca5a02983f74657b9.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sg553",
    "skin": "Tornado",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_so_tornado_light_large.32d15282560b205fb387cf876fc19da381951986.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
aztec:  [
  {
    "weapon": "tec9",
    "skin": "Ossified",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_am_ossify_light_large.29b1e40ecb5781ee6f47b460d3372b5c6601d768.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ak47",
    "skin": "Jungle Spray",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_sp_spray_jungle_light_large.af524ea61be29ab81dfb321277b98a211338de37.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m4a4",
    "skin": "Jungle Tiger",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_hy_v_tiger_light_large.cdf3f8e434ea36842fa520cabec812eaba3f2fa5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ssg08",
    "skin": "Lichen Dashed",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_sp_short_tape_light_large.f2f54766f72c881bc020b924be5ae026dcf065da.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "57",
    "skin": "Jungle",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_so_jungle_light_large.d98e255283a8cfd09aacb25405a26e580e3d129f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Forest Leaves",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_sp_leaves_light_large.b75cb0c1b82c4c1a559f0b1de3113cf967029176.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
dust:  [
  {
    "weapon": "deagle",
    "skin": "Blaze",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aa_flames_light_large.dd140c3b359c16ccd8e918ca6ad0b2628151fe1c.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "glock18",
    "skin": "Brass",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aq_brass_light_large.c9fbb8483ca7b5859fafc3c8fe495b3d396205dd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p2000",
    "skin": "Scorpion",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_am_scorpion_p2000_light_large.86333a595bc6c6139a4e84734e6eb88cd33d3e14.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "awp",
    "skin": "Snake Camo",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_sp_snake_light_large.c0b327d960af85c987bed944287935fb4b6a780a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Copper",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_copper_light_large.a2d3d9236120109adf8df1bc53b7d02250f6a50a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Copperhead",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_copperhead_light_large.166fd555b0075feb698783999d906c4529d2d631.png",
    "wearMin": 0.12,
    "wearMax": 0.38
  },
  {
    "weapon": "ak47",
    "skin": "Predator",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_sp_zebracam_light_large.5f15c9e41b9ac135b87cdadb407c9872e31c1f29.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "scar20",
    "skin": "Palm",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_sp_palm_light_large.ed935d932711961605c3b03b896560f4ebfe8861.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m4a4",
    "skin": "Desert Storm",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_hy_desert_light_large.30d1e3dcc03baca8d4a3f222b3b851ad12c77799.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
inferno:  [
  {
    "weapon": "tec9",
    "skin": "Brass",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_aq_brass_light_large.0e78665f494e390a064c8a838030b4458536d9ae.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Anodized Navy",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_an_navy_light_large.87999cce45a03f8e83c28db98874810a5c990c10.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m4a4",
    "skin": "Tornado",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_so_tornado_light_large.5e852b0952af47cde9b8c60edf137f34b81fe812.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Gunsmoke",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_gelpen_light_large.214a92b3bec9ab81ad0c13276fa4ac552530f31f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mag7",
    "skin": "Sand Dune",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_so_sand_light_large.9dfc46fd60aa92768b02d39371d5aac04b892ff8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Walnut",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_walnut_nova_light_large.38cd0f88162ed88eb81df71f5fb18139c3a36c77.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
militia:  [
  {
    "weapon": "scar20",
    "skin": "Splash Jam",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_hunter_blaze_pink_light_large.b7af5eed6be0c7d95ec01e2ed916841da005ccfc.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m4a4",
    "skin": "Modern Hunter",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_hy_hunter_modern_light_large.9753bebcd2ed4bba8a432283f35c5d197912db9d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ppbizon",
    "skin": "Modern Hunter",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_hunter_modern_light_large.04891176bf0284ba4f8002c2c32445cbde50a8c6.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Modern Hunter",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_hunter_modern_light_large.01e6755d9b42d1594837f60bad79e0f6295df8db.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Blaze Orange",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_hy_hunter_blaze_orange_light_large.3aa81203583739ae361787f625976dee6b7a1f25.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "xm1014",
    "skin": "Blaze Orange",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_hy_hunter_blaze_orange_light_large.def31710e14b573829a2138ffc7c3eadb3f49e5c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Modern Hunter",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_hy_hunter_modern_light_large.47b91ea74e82f6e041bcf2d03c117be62ae25909.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p2000",
    "skin": "Grassland Leaves",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_sp_leaves_grassland_light_large.a7885e449e09718b530a5f8e4b79a30931f104cb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "xm1014",
    "skin": "Grassland",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_so_grassland_light_large.412e08f5f190db15e6118e19c6ea0752bbaed180.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Tornado",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_so_tornado_light_large.38973a9ca86e017389bed34a6b1c86a2b6585891.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ppbizon",
    "skin": "Forest Leaves",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_sp_leaves_light_large.ce2a773d74c050c18f99daaa39d4b670878abd99.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
nuke:  [
  {
    "weapon": "tec9",
    "skin": "Nuclear Threat",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_sp_nukestripe_green_tec9_light_large.0067333625bf11ffa93d705dde553b4b2bf6f82c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Nuclear Threat",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_sp_nukestripe_green_light_large.099ce352cdcf83040aad712968d066f260439c22.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m4a4",
    "skin": "Radiation Hazard",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_sp_nukestripe_orange_light_large.deb3995ec0bd7021cf33ca089f1d889fb92aba94.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p90",
    "skin": "Fallout Warning",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_sp_nukestripe_maroon_light_large.c3915e723b821c0d03fcaf506129b23f16bdff0f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ump45",
    "skin": "Fallout Warning",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_sp_nukestripe_maroon_light_large.929675f44f0303f77fdd556348294178ecf23db1.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "xm1014",
    "skin": "Fallout Warning",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_sp_nukestripe_maroon_light_large.8b6facf30ed6057509fcaf2c8a75a04c2629203a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mag7",
    "skin": "Irradiated Alert",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_sp_nukestripe_brown_light_large.e1d7540ba5131a2e2cf36a8f7c6edc98d0cd431a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ppbizon",
    "skin": "Irradiated Alert",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_sp_nukestripe_brown_light_large.993c1c6ed6bf4a239268651e4150bc4a615f2632.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Irradiated Alert",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_sp_nukestripe_brown_light_large.6a39be9be23998f45a37a5f71c6467dacb728a03.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
office:  [
  {
    "weapon": "mp7",
    "skin": "Whiteout",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_so_whiteout_light_large.1f27273c189c19b42567bdd44ffc3e5be70ea3a4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p2000",
    "skin": "Silver",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_an_silver_light_large.84bfd2f0bdc7ab614d9cd7103b7d071606118166.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m249",
    "skin": "Blizzard Marbleized",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_hy_blizzard_light_large.d247530ad94ee2a0c164116b89fd3f38a43dbf30.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "galil",
    "skin": "Winter Forest",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_forest_winter_light_large.2a0bc5c784fc6782304eb3ef68e4f07c6c92d3bf.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "g3sg1",
    "skin": "Arctic Camo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_hy_arctic_light_large.0eb54eebce1517513ecdb3788459c09358971f77.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "famas",
    "skin": "Contrast Spray",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_sp_spray_light_large.fe886d820746c0f4333c0e0ea6d308473e241c4b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
vertigo:  [
  {
    "weapon": "duals",
    "skin": "Demolition",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_so_tangerine_light_large.3fd8ec1b63079a11e24d78228ad989b51a30b0ca.png",
    "wearMin": 0.26,
    "wearMax": 0.6
  },
  {
    "weapon": "ak47",
    "skin": "Black Laminate",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_bw_light_large.c504cab278a4955e92255ee2022340be2d0982a4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p90",
    "skin": "Glacier Mesh",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_sp_mesh_glacier_light_large.742539900d5186f68defb5fac7e6a82771c302dd.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ppbizon",
    "skin": "Carbon Fiber",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_am_carbon_fiber_light_large.bc4fbdedf71b3b922a2596dac8df3c50306ecf51.png",
    "wearMin": 0,
    "wearMax": 0.12
  },
  {
    "weapon": "mac10",
    "skin": "Urban DDPAT",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_hy_ddpat_urb_light_large.0c29c0fcd256ee141fac956e954179504dfe0c74.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "xm1014",
    "skin": "Urban Perforated",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_sp_tape_dots_urban_light_large.751c1e2059e1b9b8ef64b4cd94b22e35cccd0477.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
// Operation Bravo collection
alpha:  [
  {
    "weapon": "scar20",
    "skin": "Emerald",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_an_emerald_bravo_light_large.1fddac26d628445bdc9856e04b5e9c69f526120b.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "famas",
    "skin": "Spitfire",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_sp_spitfire_famas_bravo_light_large.ac455b0749733b0bdce019c0e0c74270d689eb95.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mag7",
    "skin": "Hazard",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_sp_hazard_bravo_light_large.51f8430aea46a8f93e504fb9ea950cd772930d6d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "aug",
    "skin": "Anodized Navy",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_an_navy_bravo_light_large.8057388b1d777096c036f1b2d8ba9ce15103678d.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ppbizon",
    "skin": "Rust Coat",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_aq_steel_bravo_light_large.ace529ee6d0eefe9159eaf040b364ad853ccf893.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "glock18",
    "skin": "Sand Dune",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_so_sand_bravo_light_large.b505115b9e7a3e6480697f0262d76c9518c65e50.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "negev",
    "skin": "Palm",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_sp_palm_bravo_light_large.3271a8edfb42d163f18a957bc162ddf01f29d30a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ssg08",
    "skin": "Mayan Dreams",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_hy_mayan_dreams_bravo_light_large.647a85eff07e6565e9e284968d9c11a1ec42da68.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Mosaico",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_hy_ali_tile_bravo_light_large.979b575c05b90ab9ae836ff28396737323818e1b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Facets",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_crumple_dark_bravo_light_large.159ee3e3e5c507d869c9089978a8ed82897fcfa4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp9",
    "skin": "Dry Season",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_sp_tape_dots_bravo_light_large.e6624212c506215295ff5bf1b4c9bd7523db3ab5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "57",
    "skin": "Anodized Gunmetal",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_an_gunmetal_bravo_light_large.6aaf03603a7ef748f5395af2a738f899f423522b.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "tec9",
    "skin": "Tornado",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_so_tornado_bravo_light_large.b9bcae80fa19a0a2a147484427733172c2189cb9.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m249",
    "skin": "Jungle DDPAT",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_hy_ddpat_jungle_bravo_light_large.d93812236444afc67a0d994cd3f6faa421a57114.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "xm1014",
    "skin": "Jungle",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_so_jungle_bravo_light_large.0b0998c1c247ffc870bbdbc4c53696cd8a974f30.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Groundwater",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_so_olive_bravo_light_large.fd49ae0c11fa44fb6110f4ec9d34651d4e6f9185.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
// Nov 2013 collections - all active as of March 2023
dust2:  [
  {
    "weapon": "r8",
    "skin": "Amber Fade",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_aa_fade_metallic_revolver_light_large.d56e81f58bb716ac6ca130bd41802bb8962dd0cf.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "p2000",
    "skin": "Amber Fade",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aa_fade_metallic_light_large.8efd81c9cf483adb6bdf58508800f62d3fc72310.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "m4a1s",
    "skin": "VariCamo",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_hy_varicamo_light_large.794803daec1d6d6cd2c47d8e8520d9f5f0b1fc1b.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ppbizon",
    "skin": "Brass",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_aq_brass_light_large.afcbbd3e31fd3600ddb45b4a0c48b6350ab761f9.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "sg553",
    "skin": "Damascus Steel",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_aq_damascus_sg553_light_large.543355687f0396ad10ed2f2705bc242ce5fdfbc5.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Safari Mesh",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_sp_mesh_tan_light_large.0372a5d37f473b9cf5e2ee32d2f5d36247f24a3a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "57",
    "skin": "Orange Peel",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_sp_tape_orange_light_large.d784ec0c92136e9f3f33ca09444ff4fe6a1f5300.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Snake Camo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_sp_snake_light_large.5e65a350f30aa592de234f631d5d2cd98838fb4e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Palm",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_sp_palm_light_large.22a3296d079e27cb7bb291e15eff10c29aa89b3e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "tec9",
    "skin": "VariCamo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_varicamo_light_large.8a863390cd0fc243c3697c3d551139d3553fde03.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "p250",
    "skin": "Sand Dune",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_so_sand_light_large.c77b762093b4786e0c070317e6a2121c2e7b4c86.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "g3sg1",
    "skin": "Desert Storm",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_hy_desert_light_large.4e5561884f1cd7f8d6965b9c7991f89a702b72b4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp9",
    "skin": "Sand Dashed",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_sp_tape_short_sand_light_large.893d0bacf03750448cef4be1f649591b9622907e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p90",
    "skin": "Sand Spray",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_sp_spray_sand_light_large.18ac7e644639b8756fa3984055a493c5d7fc8249.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Predator",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_sp_zebracam_light_large.4a13bdc4fa3b5cd7d89c8cc83700d3a13326a6c3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "scar20",
    "skin": "Sand Mesh",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_sp_mesh_sand_light_large.880aed82e5ba9c8c9d4a7ebb88e5a51491ce2d59.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
italy:  [
  {
    "weapon": "awp",
    "skin": "Pit Viper",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_snakeskin_light_large.e6addbb49a7024f800a35c9e081402a2c8631028.png",
    "wearMin": 0.08,
    "wearMax": 0.5
  },
  {
    "weapon": "sawedoff",
    "skin": "Full Stop",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_hy_varicamo_red_light_large.8db408c4317e19bfdf8adc6c3183327866423445.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "glock18",
    "skin": "Candy Apple",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_so_red_light_large.17b18a34a4d840905587e918a8500576e91b0cb9.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "mp7",
    "skin": "Anodized Navy",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_an_navy_light_large.7b705336c3ee472db933931597f0ab191217b3dc.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m4a1s",
    "skin": "Boreal Forest",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_hy_forest_boreal_light_large.1a7f334b65d1ff1a4ca0bb4a1b164d643169f982.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Candy Apple",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_so_red_light_large.f19886d0d01e730fc1e050416a6642488526a94c.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "xm1014",
    "skin": "CaliCamo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_hy_varicamo_desert_light_large.8931cbff2aa329928977420d05616b306eb0a91f.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ump45",
    "skin": "Gunsmoke",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_hy_gelpen_light_large.79d22fa00d44408a719b7a840aa4497eebca68fb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p2000",
    "skin": "Granite Marbleized",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_hy_granite_light_large.30d6a68c522ae5dd0cf7a67e07eccb66cf50b04c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "duals",
    "skin": "Stained",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_aq_forced_light_large.c654256613e0893b16be27a7621ec469a63a9955.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Contractor",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_so_pmc_light_large.e2a06ba5d6c412408d2447e162572817ee052bd3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Sand Dune",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_so_sand_light_large.33854508338eb4801380c7d7d328f2285ad3a746.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "famas",
    "skin": "Colony",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_so_space_marine_light_large.bc0a11080c9b3b50c13ddbe4afa3f6f96311fec4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "tec9",
    "skin": "Groundwater",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_so_olive_light_large.6c35f2cb6ef0f893f02d70759c528fe4958adebc.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ppbizon",
    "skin": "Sand Dashed",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_sp_tape_short_sand_light_large.dcf913a3a4fcd421012482e8c1cb55d05d9828f9.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
lake:  [
  {
    "weapon": "duals",
    "skin": "Cobalt Quartz",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_am_crystallized_blue_light_large.5756d02f9908e1c4d70e6f1d9dae53b3731fc0fd.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "p90",
    "skin": "Teardown",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_sp_mesh_hot_and_cold_light_large.b1e759ec76815883bf3e293215e3858eaa0763b1.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "usps",
    "skin": "Night Ops",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_hy_varicamo_night_light_large.df1cac3f27ea81237acbc9d56137f5e3ddf072d5.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "sg553",
    "skin": "Anodized Navy",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_an_navy_light_large.5c45c1c33100694fc010a39ba92e3afab1d7c5e7.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "awp",
    "skin": "Safari Mesh",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_sp_mesh_tan_light_large.3608cbeb9bb163bfd2becb4ebcce2576b9ca78d9.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "xm1014",
    "skin": "Blue Steel",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_blued_light_large.322850eb06df5352f302b6d4dffb1d2472dac596.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "deagle",
    "skin": "Mudder",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_hy_mottled_sand_light_large.615be084d4bc9db8c98451f13351cae1fa0ec69c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "famas",
    "skin": "Cyanospatter",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_hy_reef_light_large.d3138f4491b5413241bf64a82e0545ddc4c9e80d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ppbizon",
    "skin": "Night Ops",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_varicamo_night_light_large.f0593c24d14333e68c7eb0e916385270d5612b46.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "g3sg1",
    "skin": "Jungle Dashed",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_sp_tape_short_jungle_light_large.02fd06db8f950789b6c4bff265df06439382c585.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "aug",
    "skin": "Storm",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_so_stormfront_light_large.84dee43e41ff0fe95173b635e369b486848fe92f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Boreal Forest",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_forest_boreal_light_large.d805b3c56f74420ea25e14db86e7cf8181d98134.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sg553",
    "skin": "Waves Perforated",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_sp_tape_dots_waves_light_large.6225b7ae003cefaab7deca7ea517576991055bbd.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "galil",
    "skin": "Sage Spray",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_sp_spray_desert_sage_light_large.34f1268c2cf12e7794538b7140456d3716d81142.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "xm1014",
    "skin": "Blue Spruce",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_so_moss_light_large.5308796fa6ef2edaa45a6c6e73c59452fc265781.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
safehouse:  [
  {
    "weapon": "m4a1s",
    "skin": "Nitro",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_so_orange_accents_light_large.625f58cdc5641f440ccf2fe866c3152b5803d1f2.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ssg08",
    "skin": "Acid Fade",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_aa_fade_grassland_light_large.82950af31c177d14983665459ddee77f63379f4d.png",
    "wearMin": 0,
    "wearMax": 0.03
  },
  {
    "weapon": "famas",
    "skin": "Teardown",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_sp_mesh_hot_and_cold_light_large.c93a700bb3cf4d14241d3c837569b571685b0b29.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "57",
    "skin": "Silver Quartz",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_am_crystallized_silver_light_large.1c5e2fb5a3541523f1ff3a28f4138d83eed3a67f.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "m249",
    "skin": "Gator Mesh",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_sp_mesh_python_light_large.39f20f5499a7d68e8b90a9e064c993e9a803d721.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "galil",
    "skin": "VariCamo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_varicamo_light_large.4893edef6838528fadcc0a790a0ed132cdf2f1b9.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "g3sg1",
    "skin": "VariCamo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_hy_varicamo_light_large.6c944e82080f68d87881cdab86852e9375af9bb9.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "usps",
    "skin": "Forest Leaves",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_sp_leaves_light_large.a71c8dc482fea4aaa1c6b5c115e370a7e134ddfd.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "aug",
    "skin": "Condemned",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_sp_mesh_forest_fire_light_large.eabf7b69ca1447bee596cdbaf21b48cd7537dbce.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp9",
    "skin": "Orange Peel",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_sp_tape_orange_light_large.77854282ffc131b7bbe878c140b3c41bfb735242.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ssg08",
    "skin": "Blue Spruce",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_so_moss_light_large.74753da395e67d490101269838df28e1b6313a25.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "tec9",
    "skin": "Army Mesh",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_sp_mesh_army_light_large.b2404b6aa0c7e1584fe2691cfeba70d823aff562.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "duals",
    "skin": "Contractor",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_so_pmc_light_large.eb0b65f961c27f233d8846c80301666925712e93.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "scar20",
    "skin": "Contractor",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_so_pmc_light_large.c3e05baecc15229a989ddd093964e9c4e9fbe68a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Army Recon",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_spray_army_light_large.e879b8808f8c967e4f08fde194d6d58f64dfdb2d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
train:  [
  {
    "weapon": "tec9",
    "skin": "Red Quartz",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_am_crystallized_light_large.787b7ae299c33a003515537d5335b38d589e2e9f.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "deagle",
    "skin": "Urban Rubble",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_hy_varicamo_urban_light_large.a9791d0046206f88085f2d0850ec577c6f535a47.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "sawedoff",
    "skin": "Amber Fade",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aa_fade_metallic_light_large.aa7418206953ed4b7707ddbc859bb1eb7bf6c9ab.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "m4a4",
    "skin": "Urban DDPAT",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_hy_ddpat_urb_light_large.7ced16120d54bcdc2faa66d215ae81041ab23bc4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Candy Apple",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_so_red_light_large.00ffdb3b77314dae95b0683242cba794dbe5dd03.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "p250",
    "skin": "Metallic DDPAT",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_urban_light_large.2f6ef478d97cb2887fc4106cf89768f6cccd8ed6.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "scar20",
    "skin": "Carbon Fiber",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_am_carbon_fiber_light_large.1e2b9188a7cffb26c7a912995de329bd70d0d1d9.png",
    "wearMin": 0,
    "wearMax": 0.12
  },
  {
    "weapon": "mag7",
    "skin": "Metallic DDPAT",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_am_urban_light_large.49c3b842a021265e8dd66f05ebe20fc76a6dfdba.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "p90",
    "skin": "Ash Wood",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_sp_twigs_light_large.32f929b66cdf34997897a48260a53946e786a531.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "g3sg1",
    "skin": "Polar Camo",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_hy_arctic_contrast_light_large.d1444467ee9975d1b4d5287a280e8684e7338493.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "57",
    "skin": "Forest Night",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_hy_forest_night_light_large.fc245886bed9e789350127f844afe63f34f64936.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ump45",
    "skin": "Urban DDPAT",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_hy_ddpat_urb_light_large.2a86a32be1865ab7757d80bfbee44c80662ee4d9.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "duals",
    "skin": "Colony",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_so_space_marine_light_large.101c6b29315d37db050a4c7817a4c11517baa167.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ppbizon",
    "skin": "Urban Dashed",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_sp_tape_short_urban_light_large.141f3b1f24bc6c964a78ca58b38c01ad773fbc12.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Polar Mesh",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_sp_mesh_arctic_contrast_light_large.b85fc46665b05c2a0eea955a7946e644a7618944.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
// Mirage added Nov 2013, available in Operation Vanguard
// Replaced by Bank in May 2014, active as of March 2023
mirage:  [
  {
    "weapon": "mag7",
    "skin": "Bulldozer",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_so_yellow_light_large.bb2e6280c1d92a574c93123d79d5724276db69f3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp9",
    "skin": "Hot Rod",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_an_red_light_large.051bb03c037d5218c15c2b9f9797b21b5d0744a8.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ump45",
    "skin": "Blaze",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_aa_flames_light_large.03387f4a0a4ac6fe60437ec998e93de0b39e9b8b.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "mac10",
    "skin": "Amber Fade",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aa_fade_metallic_light_large.1af4a93ef5fee1f1510d364f54d1a730474860ef.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "glock18",
    "skin": "Groundwater",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_so_olive_light_large.1af3a84683b1f123d0bc17319d14979bf7a12115.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ssg08",
    "skin": "Tropical Storm",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_sp_palm_shadow_light_large.fb24b5ed2a03a35a12f5ee7166bc458ab4ae77e7.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Orange Peel",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_tape_orange_light_large.5870d3d214c5b4cd923d68c4a016b72596808db1.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sg553",
    "skin": "Gator Mesh",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_sp_mesh_python_light_large.ee7a2353f499fc228f88aaa99bd7ac4d9fac1257.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "negev",
    "skin": "CaliCamo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_hy_varicamo_desert_light_large.169bd7cc986fe8b3411c2f8dc484dad4ee9fff71.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "57",
    "skin": "Contractor",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_so_pmc_light_large.eb6a08d487f3423d956898bae7b84433b1f46d25.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "aug",
    "skin": "Colony",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_so_space_marine_light_large.ee525f5aaf19c6d97af3b0378d3d3cac26476d80.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p90",
    "skin": "Scorched",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_sp_dapple_light_large.6a715fc8b63ae569c2facb1607b5243c21a7280a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "g3sg1",
    "skin": "Safari Mesh",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_sp_mesh_tan_light_large.19acce2a10000a2c03f8f89dc39ff1af3e8ca195.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Bone Mask",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_sp_tape_light_large.8ece2047279c054325b0d2632559de145cef524a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "galil",
    "skin": "Hunting Blind",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_sp_mesh_slashes_light_large.f3c1ef94e52aa6cfe3c3ba2890e0d5ac0764900a.png",
    "wearMin": 0,
    "wearMax": 0.6
  }
],
bank:  [
  {
    "weapon": "p250",
    "skin": "Franklin",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_money_light_large.a8632edd5846b8c9de09c711ada47f7decc739b7.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "ak47",
    "skin": "Emerald Pinstripe",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_pinstripe_ak47_light_large.2123421a26fbe673eea7c0238c7441a83b97aa17.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "deagle",
    "skin": "Meteorite",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_crystallized_dark_light_large.2d7d753a893ec3f0a470af9690aa64dcecd7146f.png",
    "wearMin": 0,
    "wearMax": 0.18
  },
  {
    "weapon": "galil",
    "skin": "Tuxedo",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_so_orca_light_large.5db78708464e031c686ae2e730e997e01526a7ea.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "cz75",
    "skin": "Tuxedo",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_so_orca_light_large.8490865eba36c09ccd75a9b1f93445ff2e9f2b8f.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Silver",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_an_silver_light_large.3082e91b9fddbddc9b72da44382fe1def00fa5fa.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ump45",
    "skin": "Carbon Fiber",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_am_carbon_fiber_light_large.b250b860bbe6f7a689448cc47b6ac25427e3d848.png",
    "wearMin": 0,
    "wearMax": 0.12
  },
  {
    "weapon": "g3sg1",
    "skin": "Green Apple",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_so_green_light_large.28c4e72757be64775c1111ac0e7142a147cacb9c.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "nova",
    "skin": "Caged Steel",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_am_oval_hex_light_large.766118990b3726617ed6203e95abc71417dbd057.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "glock18",
    "skin": "Death Rattle",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_hy_nerodia_light_large.540067f703bf7b020d8fedfcc6322523ab449d68.png",
    "wearMin": 0.08,
    "wearMax": 0.5
  },
  {
    "weapon": "r8",
    "skin": "Bone Mask",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_sp_tape_light_large.c8f9124ff70ca2a6e8867920cd39e4fb7308ac87.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "tec9",
    "skin": "Urban DDPAT",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_ddpat_urb_light_large.bd44491d7de854c08e2951e14f9066afdb340dd6.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Forest DDPAT",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_hy_ddpat_light_large.0207fb5fe0a1e21cdda28e005f7960f2dc4728b9.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Forest DDPAT",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_hy_ddpat_light_large.e3f476b768693a046994a90e2aca045d329e6957.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "negev",
    "skin": "Army Sheen",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_am_army_shine_light_large.884085f4a13b786f0ac7234d616ff01a848f28d5.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "sg553",
    "skin": "Army Sheen",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_am_army_shine_light_large.a07a97d5fba73aeecfc5cc9364e0d43d47892373.png",
    "wearMin": 0,
    "wearMax": 0.3
  }
],
// August/July 2014 - Breakout, Vanguard, Bloodhound, Wildfire, Hydra Operations
cache:  [
  {
    "weapon": "galil",
    "skin": "Cerberus",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_cerbrus_galil_light_large.761250f955c66cbb100400e2fc1459ce74320282.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "famas",
    "skin": "Styx",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_am_nuclear_skulls2_famas_light_large.ec9774f3b2a03f5411321dba792b05f19096547c.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "glock18",
    "skin": "Reactor",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_nuclear_pattern1_glock_light_large.01e91d2930e04d43215becb90447b2ebec1cb8d9.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Toxic",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_nuclear_skulls5_tec9_light_large.d83d7de4c10dbc5fae925a4cb531ca7a8deef3d1.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "mp9",
    "skin": "Setting Sun",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_hy_nuclear_pattern2_mp9_light_large.d5f2b29c15286ea4c63cd60061d1073ec7e84087.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Nuclear Garden",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_nuclear_skulls3_mac10_light_large.467b325065522e5248247cf125bec257cdb66902.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "xm1014",
    "skin": "Bone Machine",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_am_nuclear_skulls1_xm1014_light_large.716e8296c07d3e6d5c9f5f20605c9608bbb78ca1.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "57",
    "skin": "Hot Shot",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_so_grey_nuclear_orange_five_seven_light_large.1f99a49ba11741a36385ef0934d8066624d4d257.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ppbizon",
    "skin": "Chemical Green",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_so_grey_nuclear_green_bizon_light_large.072e25b1fa34f50da3850310424b8b96983cf684.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "aug",
    "skin": "Radiation Hazard",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_sp_nukestripe_orange_aug_light_large.4309138bd5b9e518628d517a275747ec9c2207d3.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "sg553",
    "skin": "Fallout Warning",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_sp_nukestripe_maroon_sg553_light_large.95996aebdd6d4308d577f481e0c73250d2c82c74.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "negev",
    "skin": "Nuclear Waste",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_sp_nuclear_pattern3_negev_light_large.2d4cd96f9a94367d4c22991250eb9350437d8be6.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "p250",
    "skin": "Contamination",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_nuclear_skulls4_p250_light_large.83b7c2eeff0d6fd0e6d780be0815111d199a46d6.png",
    "wearMin": 0,
    "wearMax": 0.83
  }
],
cobblestone:  [
  {
    "weapon": "awp",
    "skin": "Dragon Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medieval_dragon_awp_light_large.cb3b8168e59e96fd33efa9578206a2aaed036fc0.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "m4a1s",
    "skin": "Knight",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_am_metals_light_large.1ef1155c712349b2aaee8172a3da7fb1e62e1362.png",
    "wearMin": 0,
    "wearMax": 0.1
  },
  {
    "weapon": "cz75",
    "skin": "Chalice",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_royal_light_large.f9f7bd8e5321fa0572adc2b77050608e5570cdaf.png",
    "wearMin": 0,
    "wearMax": 0.1
  },
  {
    "weapon": "deagle",
    "skin": "Hand Cannon",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_handcannon_light_large.e6e87ceb2337a423d225dc177342af3df4069585.png",
    "wearMin": 0.01,
    "wearMax": 0.7
  },
  {
    "weapon": "mp9",
    "skin": "Dark Age",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_metal_inlay_light_large.a49681fb3a39bd378051dd22ff9f988fd831d41f.png",
    "wearMin": 0,
    "wearMax": 0.22
  },
  {
    "weapon": "p2000",
    "skin": "Chainmail",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_am_chainmail_light_large.26e8d5e01b6af8dc85be34cf16830ef6280166fd.png",
    "wearMin": 0,
    "wearMax": 0.22
  },
  {
    "weapon": "usps",
    "skin": "Royal Blue",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_hy_indigo_usp_light_large.aa460050dc0fd2d87522a869cefbf5d5ab442f27.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mag7",
    "skin": "Silver",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_an_silver_light_large.ffb14b93d930ff95920974edd78cf6b31b48fe43.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "nova",
    "skin": "Green Apple",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_so_green_light_large.f6b21316c800bb19022612e4b965f7d312e8e4f5.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "sawedoff",
    "skin": "Rust Coat",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_steel_light_large.b363c0f1eef83ac7291f8b64d338dcdd82183502.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Indigo",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_so_indigo_and_grey_light_large.9900a7e2bc4fc67df08d3aff103526f666f1ef70.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ump45",
    "skin": "Indigo",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_so_indigo_and_grey_light_large.7a4685c334bf103f25ba1865dc0492315bf0ca5c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p90",
    "skin": "Storm",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_so_stormfront_light_large.60d73691845ad5ad0e5d8a15b488807d9c25a57f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "scar20",
    "skin": "Storm",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_so_stormfront_light_large.3bebdbcd4ea2ae851cdd2a06d0663121d01ebd79.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "duals",
    "skin": "Briar",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_hy_vines_light_large.bb506f02418403c8a48f7829bdc065a71c3a77d0.png",
    "wearMin": 0,
    "wearMax": 0.22
  }
],
overpass:  [
  {
    "weapon": "m4a1s",
    "skin": "Master Piece",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1-s_silence_light_large.e48d06783e5c6c99b2f65d6c82891ce9739f0181.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "awp",
    "skin": "Pink DDPAT",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_ddpat_pink_light_large.a00bebead467a7106062058982a1f8651cf663bc.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "usps",
    "skin": "Road Rash",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_sandpapered_light_large.8de907fed2d0036e0c6c1f326c20915e846227a7.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "cz75",
    "skin": "Nitro",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_so_orange_accents2_light_large.844bd6d01ce7c69486327ceb44b65b8c7cc49f2d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ssg08",
    "skin": "Detour",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_hy_ssg08_marker_light_large.318454c8676dc6d72ad1b6e343e661d9831645fb.png",
    "wearMin": 0,
    "wearMax": 0.43
  },
  {
    "weapon": "xm1014",
    "skin": "VariCamo Blue",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_hy_varicamo_blue_light_large.6b99e2f4d5092295c86b872e2a08d7ea698fe5b6.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "glock18",
    "skin": "Night",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_so_night_light_large.e56ea92b4b8c1914a7f5f4e789483313845a0b4a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "deagle",
    "skin": "Urban DDPAT",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_hy_ddpat_urb_light_large.06af0cb0e08490f1fba17acd1b9c98978745c213.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Gunsmoke",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_hy_gelpen_light_large.e19dd688c21ae094ffc3649e80ee1c1f0959125a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p2000",
    "skin": "Grassland",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_so_grassland_light_large.c2c8cd99960f57e1e4eeb1261dfaf3006e672577.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp9",
    "skin": "Storm",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_so_stormfront_light_large.7ba67d4546c43cb6dfb9e46eb68d23d5b57471ae.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mag7",
    "skin": "Storm",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_so_stormfront_light_large.40f72ef6782f32f64bd883923fedfe0d1512d582.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m249",
    "skin": "Contrast Spray",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_sp_spray_light_large.1954bdc0dc1e10eebeece7f34e2b9f8e51596d55.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Sage Spray",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_sp_spray_desert_sage_light_large.e944ddb90e97199d1f274c481462a3a660b9fc5a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ump45",
    "skin": "Scorched",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_sp_dapple_light_large.a25c92df26ac1c70c65741a07d9da8b0d0785022.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
// Sep 2018 - active as of March 2023
inferno2018:  [
  {
    "weapon": "sg553",
    "skin": "Integrale",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_rally_light_large.904b6f70dc7c8fe107d2cdb5acbdd0be6f686a3f.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Twin Turbo",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_dual_elites_rally_light_large.5b3cf9c54a4e7927724560a210955a77887ecb2e.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "Vino Primo",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_checker_light_large.ed544cb647f7bf4e4ccc103a0b687b562d2fb297.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Safety Net",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_mesh_safetyorange_light_large.f4ee68bc3bbd972ded65ec36b66259199b7fafb7.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "mp7",
    "skin": "Fade",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_aa_fade_mp7_light_large.ed53795666c445f3b00a4968062514b3bb5dd166.png",
    "wearMin": 0,
    "wearMax": 0.25
  },
  {
    "weapon": "ssg08",
    "skin": "Hand Brake",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_gs_ssg08_checker_light_large.26b2d6ca1e703c0427c31fa43bb1bf9fca58690e.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "usps",
    "skin": "Check Engine",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_sp_mesh_safetyred_light_large.2236c5b787e251c103ddf44209b4b7731b3d9a43.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "m4a4",
    "skin": "Converter",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_hy_red_hex_light_large.cd2153af94a302c0293620289716a29d9fbfbeca.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "sawedoff",
    "skin": "Brake Light",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aa_vertigo_red_light_large.999797e68b2d5df290b2e5771b6c4bfb0de1ec8c.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "glock18",
    "skin": "High Beam",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aa_vertigo_blue_light_large.0f4a3ec87faf17bb8557aa3b57a99606ac24c44e.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "r8",
    "skin": "Nitro",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_so_orange_accents3_light_large.00867f70c109a7934345f92aae1be055b6a98abb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Calf Skin",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_checker_light_large.15e4936899fbfca7c5980be83993e57aca446422.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ppbizon",
    "skin": "Candy Apple",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_so_red_light_large.0ee9cada135b87096b447521a05c0a2d437bf9ff.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "mp9",
    "skin": "Slide",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_hy_splatter3_light_large.e87822a5caeb6a7181e0e866612c755f78f66be1.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp5sd",
    "skin": "Dirt Drop",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_sp_tape_short_rally_light_large.2fdb10eba1dbf17030a2c0867fc385fe0449b974.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ump45",
    "skin": "Mudder",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_hy_mottled_sand_light_large.14c5d59d597a00bdccaefe47a99de0e5b1f884d6.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "aug",
    "skin": "Sweeper",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_sp_mesh_safetyblack_light_large.41766cdb86c7b662a4c6316b2864751c54940faf.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "mag7",
    "skin": "Rust Coat",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_aq_steel_inferno_light_large.4313699bf1fb212a490703f11b20dab3479ebe9c.png",
    "wearMin": 0,
    "wearMax": 1
  }
],
nuke2018:  [
  {
    "weapon": "m4a1s",
    "skin": "Control Panel",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1s_operator_light_large.1e257113e58841ad0613b4e268d51d239df69a0e.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Remote Control",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_envoy_light_large.068b8cb4ed0f4064624820bf2cf34ecc4c38d8b2.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "glock18",
    "skin": "Nuclear Garden",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_nuclear_skulls_green_light_large.37c3765f928a0a002d283c0fa7f4f409f4fa9e82.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "mag7",
    "skin": "Core Breach",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_hy_nuclear_hotorange_light_large.35367773b8501fa045ad8c58387c6f48fc848045.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Random Access",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_am_circuitboard_orange_light_large.da9f7304f48f9f02cdc452bf7761452f8fec6bc2.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "awp",
    "skin": "Acheron",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_nuclear_skulls_redblue_light_large.601aa23f996c480640f439e05f204c5bd7fafa49.png",
    "wearMin": 0,
    "wearMax": 0.83
  },
  {
    "weapon": "mp5sd",
    "skin": "Co-Processor",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_am_circuitboard_aqua_light_large.205e1ac1b5bfbbfa8f0449cc08b42daf3e4addd2.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p90",
    "skin": "Facility Negative",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_blueprint_aqua_light_large.35f86b3da01a31539d5a592958c96356f63d1675.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p250",
    "skin": "Exchanger",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_ducts_blue_light_large.7e3036d2c146970842cfdd1e4b4529ee5480787c.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "galil",
    "skin": "Cold Fusion",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_nuclear_skulls_aqua_light_large.7a9f8497a5e17485c2dcd09ec23da307bc3c06c3.png",
    "wearMin": 0,
    "wearMax": 0.83
  },
  {
    "weapon": "m4a4",
    "skin": "Mainframe",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_am_circuitboard_silver_light_large.7a3b860966a77bcb8124a2c38cf4b0449fd542ba.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "negev",
    "skin": "Bulkhead",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_hy_ducts_yellow_light_large.9d9335325a4a696ec6c2ef704ec1d4b3112c8c87.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp7",
    "skin": "Motherboard",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_am_circuitboard_green_light_large.0df678715d2256928d817c2e89575879f03ad68e.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ppbizon",
    "skin": "Facility Sketch",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_blueprint_white_light_large.5a8bb5711fec1758844f92beab8a1ecb054f91bd.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "57",
    "skin": "Coolant",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_hy_ducts_green_light_large.687c4ada7a094872eeb5b48cbff3ebac68a8d7ed.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p250",
    "skin": "Facility Draft",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_blueprint_red_light_large.aff5f9b0847413a1749e8636dfc9a92d1ed77f3e.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "nova",
    "skin": "Mandrel",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_hy_ducts_grey_light_large.5da9a312aedae8885ff2e4dec4387fe614ce4ee3.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ump45",
    "skin": "Facility Dark",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_hy_blueprint_bluered_light_large.1f2e4c38f9f9e7e1d815aeb5af99c499c5ff4951.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
// Sep 2021 - Riptide Operation
dust2_2021:  [
  {
    "weapon": "ak47",
    "skin": "Gold Arabesque",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_gold_arabesque_light_large.0d1b0b2bfcafe8d214837077367e7dd42394822e.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ssg08",
    "skin": "Death Strike",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_scorpion_light_large.4ef3abe29eb6c2f16a74dc404929e47ad05d297f.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "ump45",
    "skin": "Fade",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_aa_fade_ump_light_large.8f6cd56e5075505e9cbda97e72ba49837a17b8f7.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m4a4",
    "skin": "Red DDPAT",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_hy_ddpat_urban_red_light_large.ecde1360b79a9d925495a523ee95eb9f4b4b17eb.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mac10",
    "skin": "Case Hardened",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aq_oiled_light_large.9d9de18ba0a4dc915e495c05b0d1419bd2cd7a02.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "usps",
    "skin": "Orange Anolis",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_am_lizard_red_light_large.8028fa8c551ef6e26b3fff892e8138b5294ad7fd.png",
    "wearMin": 0,
    "wearMax": 0.37
  },
  {
    "weapon": "galil",
    "skin": "Amber Fade",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_aa_fade_metallic_light_large.6910731d5c0d857052afbba2d24416156a6a96ba.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "nova",
    "skin": "Quick Sand",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_hy_torn_camo_paints_light_large.d53ec6ccfa639f7263876a96b019d3b3946af751.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p250",
    "skin": "Black & Tan",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_desert_multicam_light_large.5e9064075a3dd4cec98f1fbb19372212ef94ec8d.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "g3sg1",
    "skin": "New Roots",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_sp_moro_carving_lightblue_light_large.4d260ef80213690b0d967f94874fbed4c4a73484.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "57",
    "skin": "Withered Vine",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_sp_moro_textile_purple_yellow_light_large.47cc81847e4fd47b359bf0cfea09910d03a32bd7.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "aug",
    "skin": "Spalted Wood",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_dry_wood_light_large.e42f196cbcf1e4cf9bb0b382eb06b651a2aed038.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "mp9",
    "skin": "Old Roots",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_sp_moro_carving_yellow_light_large.c86dfd42974acb136ffd14f9b9a283fdb80ec135.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "m249",
    "skin": "Midnight Palm",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_sp_palm_night_light_large.8d8112a73e3c854dce2126fa766ae8a93532f1aa.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp7",
    "skin": "Prey",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_zebracam_red_light_large.d55be83c6281f9d9bf4125173dcea870cf9ca0b1.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "sg553",
    "skin": "Bleached",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_sp_desert_skulls_light_large.3ac80055b461251992cea8183d77a9e2c4662e9d.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "sawedoff",
    "skin": "Parched",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_hy_desert_bloom_light_large.6222132707bdc3c9e20b8eada269c2620bfc5013.png",
    "wearMin": 0,
    "wearMax": 0.49
  },
  {
    "weapon": "p90",
    "skin": "Desert DDPAT",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_ddpat_desert_light_large.acbbe87329d4f77b28d2cc15ce2e89c5d50436a6.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "r8",
    "skin": "Desert Brush",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_hy_brush_camo_tan_light_large.4af5232b57afac32a9eb2f056cf6fdf968a94966.png",
    "wearMin": 0,
    "wearMax": 0.6
  }
],
mirage2021:  [
  {
    "weapon": "awp",
    "skin": "Desert Hydra",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_hydra_light_large.a69be92dd5f9eef4d88b9c640f3dbf15d8c8f78c.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "deagle",
    "skin": "Fennec Fox",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_fennec_light_large.92dbda73edcc6eb6022f1f0248cb19063d7107aa.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mp5sd",
    "skin": "Oxide Oasis",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_neon_flektarn_light_large.d76e6385501ee98562f3a5ce5fe08f7c68e10046.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "glock18",
    "skin": "Pink DDPAT",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_hy_ddpat_pink_light_large.ddbb46e05e19607b8fa366cdb8efef39048e50e4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "aug",
    "skin": "Sand Storm",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_sand_storm_light_large.d5dd546bc762c78474aac4b7733af0e4e5f7f376.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "xm1014",
    "skin": "Elegant Vines",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_am_moro_textile_bright_light_large.90d9c102cff5e50e56b5d4bdc9c967ab7ae7efd8.png",
    "wearMin": 0,
    "wearMax": 0.37
  },
  {
    "weapon": "usps",
    "skin": "Purple DDPAT",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_am_ddpat_purple_light_large.993825dcdc1100cdaf92b119e82b2ba756a38bea.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "mp9",
    "skin": "Music Box",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_mirage_flowers_metalic_light_large.19bdfea08b854122c4e7e71852bddda9a59ed3cd.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "sg553",
    "skin": "Desert Blossom",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_aa_desert_bloom_bright_light_large.082aa07ec9551391143d8b825ef9f1062ea54279.png",
    "wearMin": 0,
    "wearMax": 0.49
  },
  {
    "weapon": "m249",
    "skin": "Humidor",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_sp_moro_carving_burnt_light_large.665c8aa42875f46a38e1fe38d3ee4ea7ea65b1bf.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "duals",
    "skin": "Drift Wood",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_sp_dry_wood_light_large.89fee2f97c3722747a19dcc269397d71fd7fddc1.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "famas",
    "skin": "CaliCamo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_hy_varicamo_desert_light_large.b650a2a051a809d716d4298d2387729456a404ce.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "p90",
    "skin": "Verdant Growth",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_sp_moro_textile_green_vine_light_large.47d80a883c184629d2049f8a5e2046150b35e69e.png",
    "wearMin": 0,
    "wearMax": 0.47
  },
  {
    "weapon": "cz75",
    "skin": "Midnight Palm",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_sp_palm_night_light_large.9fd0e13c6cfbb14efbdd81732ca52f64f337e8e7.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ssg08",
    "skin": "Prey",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_sp_zebracam_red_light_large.9aefb18daa0955b6ac9b0d098132425b7991fc6e.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "mag7",
    "skin": "Navy Sheen",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_am_navy_shine_light_large.fd2f1241ce0bfa16bbbd8971f72846429cc874d0.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "p250",
    "skin": "Drought",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_sp_desert_skulls_dawn_light_large.0ef79663a917620d2ab91078115200bf2747269a.png",
    "wearMin": 0,
    "wearMax": 0.44
  },
  {
    "weapon": "ppbizon",
    "skin": "Anolis",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_lizard_skin_light_large.4731c7f1d21196c4971405a722c36911b1d23aae.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mac10",
    "skin": "Sienna Damask",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_sp_mirage_flowers_tan_light_large.661511b89c0776fc024cf6b8e10390fa93e7aad6.png",
    "wearMin": 0,
    "wearMax": 0.6
  }
],
train2021:  [
  {
    "weapon": "m4a4",
    "skin": "The Coalition",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_coalition_light_large.313da3169bf32c427325ebc7f0aae1a0272e399a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "glock18",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_gamma_doppler_phase4_glock_light_large.ed9c2de2ffe8852136002385cfcee149dd202575.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "usps",
    "skin": "Whiteout",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_so_whiteout_riptide_light_large.87d3b82c83ef28ff06955915907d062376be31ac.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "famas",
    "skin": "Meltdown",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_am_nuclear_pattern4_famas_light_large.7e147f135728d6abd62f871088d69c1b2bd38076.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "mac10",
    "skin": "Propaganda",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_propaganda_light_large.d8a065b191f3df86a7e2e25d4349790ed56e0593.png",
    "wearMin": 0,
    "wearMax": 0.62
  },
  {
    "weapon": "awp",
    "skin": "POP AWP",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_technowar_rwb_light_large.227b359d409d564be7675d8334cad89636e3bdda.png",
    "wearMin": 0,
    "wearMax": 0.44
  },
  {
    "weapon": "nova",
    "skin": "Red Quartz",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_am_crystallized_light_large.a5390c1d1d4b0a879d739917bc3d9f576feb01f2.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "mp5sd",
    "skin": "Autumn Twilly",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_hy_trainarchitect_light_large.9ba8cb9505f0b67e608050ce5aa307e32dabbe1e.png",
    "wearMin": 0,
    "wearMax": 0.58
  },
  {
    "weapon": "cz75",
    "skin": "Syndicate",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_train_cz75_light_large.d0178b0f2c40cd44a38d5c0215a7152214cb1ce8.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "p2000",
    "skin": "Space Race",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aa_spacerace_orange_light_large.611eae311e379d24b3014383c6270d45012099a0.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "r8",
    "skin": "Blaze",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_aa_flames_light_large.190d9cb7b8aad31d105fe838664a7fd99ebf3535.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m4a1s",
    "skin": "Fizzy POP",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_sp_technowar_red_light_large.8b95f916513ef9d3ceab3f8b87acd23779aeef0a.png",
    "wearMin": 0,
    "wearMax": 0.57
  },
  {
    "weapon": "deagle",
    "skin": "Sputnik",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_sp_spacerace_blue_light_large.e93e99eadcae13e4ff2cbe9f958d720a34007a6d.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "aug",
    "skin": "Amber Fade",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_aa_fade_metallic_light_large.a43dbbaa988dd53a72ee6e06701c7e0cb1a225e0.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "ssg08",
    "skin": "Spring Twilly",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_hy_trainarchitect_green_light_large.99e4e0cef18a0f37f5f26caf431dde80f39f14e1.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "tec9",
    "skin": "Safety Net",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_mesh_safetyorange_light_large.a2564044371c87bb1081753c71f6cfb93f0359c1.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ump45",
    "skin": "Full Stop",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_hy_varicamo_red_light_large.30426fbdd212e0961d917ffa214e11431326ee02.png",
    "wearMin": 0,
    "wearMax": 0.6
  }
],
vertigo2021:  [
  {
    "weapon": "m4a1s",
    "skin": "Imminent Danger",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_vertigo_light_large.a144750a6903c3bdd9808e740d274648ae26c71e.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "57",
    "skin": "Fall Hazard",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_vertigo_fiveseven_light_large.8d09586ce7da49599697204b4b7fc32930b47836.png",
    "wearMin": 0.01,
    "wearMax": 0.52
  },
  {
    "weapon": "sg553",
    "skin": "Hazard Pay",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_caution_light_large.48fe10aaedc4fbba77afd76c31a5ab86da42461b.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "galil",
    "skin": "CAUTION!",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_sp_galil_caution_light_large.f70544059dd7c3ff5709c8a1493643d1ef2a5dde.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "mag7",
    "skin": "Prism Terrace",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_hy_geometric_steps_pearl_light_large.f31672cbe64c23d7d340199143758c8fc537ffb3.png",
    "wearMin": 0,
    "wearMax": 0.37
  },
  {
    "weapon": "p250",
    "skin": "Digital Architect",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aa_vertigogeo_neon_light_large.e1e7730f0d6716a372cda4b973f71cdbb7a074cd.png",
    "wearMin": 0,
    "wearMax": 0.49
  },
  {
    "weapon": "ak47",
    "skin": "Green Laminate",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_green_light_large.ecbaf85e35ca08156cc305017d4dc4276a742a8f.png",
    "wearMin": 0.02,
    "wearMax": 0.4
  },
  {
    "weapon": "nova",
    "skin": "Interlock",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_hy_vertigoillusion_yellow_light_large.73fdfc85585fff74804a6f22179406a48ce74947.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p90",
    "skin": "Schematic",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_vertigogeo_light_large.321d8068761b4b89e1e9f5916ba2cfca5068e080.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "negev",
    "skin": "Infrastructure",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_hy_vertigospray_light_large.1e6d69be2dc5ac7290ef815ae6a53bb2143103c3.png",
    "wearMin": 0,
    "wearMax": 0.49
  },
  {
    "weapon": "ssg08",
    "skin": "Carbon Fiber",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_am_carbon_fiber_light_large.90255a5b4940cc078005493430f0a73761b990e4.png",
    "wearMin": 0,
    "wearMax": 0.12
  },
  {
    "weapon": "glock18",
    "skin": "Red Tire",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_sp_tire_tread_red_light_large.bf06d5ba0f2b746eff6a66aa7020acd7a87eddc4.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "ppbizon",
    "skin": "Breaker Box",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_aa_wiring_light_large.5ec614e6c258dd17db3f7949292008a2f466f2db.png",
    "wearMin": 0,
    "wearMax": 0.44
  },
  {
    "weapon": "ump45",
    "skin": "Mechanism",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_aa_engine_performance_light_large.b4207d31aa53b7ed863535d77e9a7420f06c2681.png",
    "wearMin": 0,
    "wearMax": 0.49
  },
  {
    "weapon": "famas",
    "skin": "Faulty Wiring",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_aa_wiring_yellow_light_large.c232a36fb8d6a691893132a0baf126d250d8d35e.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "xm1014",
    "skin": "Blue Tire",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_sp_tire_tread_blue_light_large.c6107f07580de4c0d1440aacabbd8b47b788a687.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "mac10",
    "skin": "Strats",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_hy_vertigospray_blue_light_large.834dc852bd8c722d0dd30a05b3f72e6401cd987b.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "cz75",
    "skin": "Framework",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_hy_vertigoillusion_light_large.1e2ff66fbdd2d5aea56659a7ede1cc3fd570f00d.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "duals",
    "skin": "Oil Change",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_sp_engine_dirty_light_large.0e7876df94dfe920abf273e75ea62e041100de4a.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
// May 2015 - Bloodhound, Wildfire, Hydra Operations
chopShop:  [
  {
    "weapon": "m4a1s",
    "skin": "Hot Rod",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_an_red_m4a1s_light_large.ec59e9b09e1e9f46af18dea65ee90e5bdfe9ebb1.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "glock18",
    "skin": "Twilight Galaxy",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_aqua_flecks_light_large.e7d41ce4dbf0cd29f1eb3daa5ce0bb753abd1903.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "sg553",
    "skin": "Bulldozer",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_so_yellow_light_large.afbe04152bdb3090623992005c23d3a997ae0ca3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "duals",
    "skin": "Duelist",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_mother_of_pearl_elite_light_large.2023e44b16f064c32962b691bcdb5d45051744bc.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "Whiteout",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_so_whiteout_light_large.ffd6e614b63d3af24a04a9f7710b55210a7d0296.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Fade",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aa_fade_light_large.69bd70b0bb129a5c671945090f56322c37b6bcf2.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "cz75",
    "skin": "Emerald",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_an_emerald_light_large.5c4734111477a884851cae6998871cbf7c870cc6.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "57",
    "skin": "Nitro",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_so_orange_accents_light_large.b5ab3af11de68b90ca8b18e359ac0338d1a2d7f4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Full Stop",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_hy_varicamo_red_light_large.7110895d0ad1626929f361598b7f201a5ef3701a.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "deagle",
    "skin": "Night",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_so_night_light_large.64e315553578f3c8bd08c96622fc2c34d5a789ba.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "usps",
    "skin": "Para Green",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_so_khaki_green_light_large.546b3eb856bbf2aeece29e2852688ddae13531b7.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "galil",
    "skin": "Urban Rubble",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_varicamo_urban_light_large.04b4d709f1a3de109c7173d5ef55181138b247e0.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mag7",
    "skin": "Seabird",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_so_aqua_light_large.fee69dfe94d0158d2e7d8d049accdb967b8a924a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "scar20",
    "skin": "Army Sheen",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_am_army_shine_light_large.2d2f8b7c0d1a6f9541956d1bef018261ddd80542.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "cz75",
    "skin": "Army Sheen",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_army_shine_light_large.26736d48ea09a5284aeb1cf11292bc3e87a56251.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "m249",
    "skin": "Impact Drill",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_so_keycolors_light_large.bf0fe2b5d5b5c65358519ebaeeed6da72032bf4b.png",
    "wearMin": 0,
    "wearMax": 1
  }
],
godsMonsters:  [
  {
    "weapon": "awp",
    "skin": "Medusa",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_medusa_awp_light_large.05c6f5c67a2fbf7d042637568ba2ab25e44bb08c.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a4",
    "skin": "Poseidon",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_poseidon_light_large.3db5688a5b47bd5720e7384abf13c45231a3cc03.png",
    "wearMin": 0,
    "wearMax": 0.33
  },
  {
    "weapon": "m4a1s",
    "skin": "Icarus Fell",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_hy_icarus_light_large.4af0a9b1122471816242601013d478ade6a0697b.png",
    "wearMin": 0,
    "wearMax": 0.1
  },
  {
    "weapon": "g3sg1",
    "skin": "Chronos",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_chronos_g3sg1_light_large.5db791048981cda0babe949ac443f09ba8aa9eb3.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "ump45",
    "skin": "Minotaur's Labyrinth",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_labyrinth_light_large.62c8aa10ca8ad146809a21031194e450190f8485.png",
    "wearMin": 0,
    "wearMax": 0.39
  },
  {
    "weapon": "mp9",
    "skin": "Pandora's Box",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_aa_pandora_light_large.837ea28260252a1f654c272289007ae3c4c3e7ec.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "m249",
    "skin": "Shipping Forecast",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_hy_zodiac3_light_large.299cb04c12c20280930562504161309fbb9c1e45.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "awp",
    "skin": "Sun in Leo",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_zodiac2_light_large.67da534322361569bd9637688b704b57232529fa.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p2000",
    "skin": "Pathfinder",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_sp_labyrinth2_light_large.240b91eab5dc2e0f6806dfbd2fc5d33bdebe53bb.png",
    "wearMin": 0,
    "wearMax": 0.35
  },
  {
    "weapon": "tec9",
    "skin": "Hades",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_hades_light_large.9b5757d9034889f93b907b45dffe0a3802b2e4bc.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Moon in Libra",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_hy_zodiac1_light_large.cedfe5166a361ccc3c32a28847addcdc66ad25d7.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp7",
    "skin": "Asterion",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_labyrinth_light_large.05382e4a98099c6747e1a3d636b47bd617b8866a.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "aug",
    "skin": "Daedalus",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_sp_labyrinth3_light_large.86c4c77bbc59793e1bf632e1ef49101829a14773.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "nova",
    "skin": "Moon in Libra",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_hy_zodiac1_light_large.b06536b160c1807d7aa4c8e906771d3c5c2f7c59.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
risingSun:  [
  {
    "weapon": "aug",
    "skin": "Akihabara Accept",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_anime_aug_light_large.f049075c645871ee67b0b47253f59c26143efc49.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Hydroponic",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_am_bamboo_jungle_light_large.98cd023e9d2207ad765b600b281352cbc5009051.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "57",
    "skin": "Neon Kimono",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_hy_kimono_diamonds_light_large.c82060a31b7e4b17c73eb76fd87c09037a3eba42.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "deagle",
    "skin": "Sunset Storm A",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_seastorm_blood_light_large.1e92a7e19fde014e5a70832a93b440e0c036d596.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "deagle",
    "skin": "Sunset Storm B",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_seastorm_shojo_light_large.7df4fe386dac18ae2a8c3e50df7dfb9165dece83.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "m4a4",
    "skin": "Daybreak",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_am_kimono_sunrise_light_large.f4c4233632fed7004ab4666aeaceab53233cddd6.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "tec9",
    "skin": "Terrace",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_geometric_steps_yellow_light_large.4d50c678bf9eeb9f063a432aa9d5aec68e863f7d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "galil",
    "skin": "Aqua Terrace",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_am_geometric_steps_light_large.fd64d3b26b97da3c03ab009e91d3f53c95e86cc0.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "mag7",
    "skin": "Counter Terrace",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_hy_geometric_steps_green_light_large.542348e3effe63aae75b070cb1ca7d193e8356cf.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "deagle",
    "skin": "Midnight Storm",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_seastorm_light_large.aef21efecda37237d24debe3f409f42954dadddd.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "p250",
    "skin": "Crimson Kimono",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_kimono_diamonds_red_light_large.99ecb66f68d6bba4e17bc30cd72d5041e838371c.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "tec9",
    "skin": "Bamboo Forest",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_bamboo_jungle_light_large.31268450fbb5b5c2221e6eaadbe7124cf85f3e1d.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ppbizon",
    "skin": "Bamboo Print",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_bamboo_jungle_ink_light_large.0f9ee611e9b667e90923e9fc0da89430881ae7ae.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Mint Kimono",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_sp_kimono_diamonds_light_large.f8b2d66cdc64e8860b36ac2d08060d04e5ec6ae4.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "g3sg1",
    "skin": "Orange Kimono",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_hy_kimono_diamonds_orange_light_large.bdab5d4f92f5733ed056bbe276761c377b5c3401.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Bamboo Shadow",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_hy_bamboo_jungle_black_light_large.8c345668f9d6ba961f72fd67c405a8ed2cfffd4c.png",
    "wearMin": 0,
    "wearMax": 0.6
  }
],
// Nov 2019 - Shattered Web Operation
canals:  [
  {
    "weapon": "awp",
    "skin": "The Prince",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_enamel_light_large.00ae78bca507d3358c7b821dc666e21123162069.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "mag7",
    "skin": "Cinquedea",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_glass_light_large.beadef0a6bd24e7ba3ed051b2b092c27119ce075.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Red Filigree",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_ren_red_light_large.985e0a9b70dc43f90bfb6e9ce28398565396d633.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "nova",
    "skin": "Baroque Orange",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_am_veneto2_light_large.51bfad5db3f49f28c0802f4696f6282e4781f4db.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp9",
    "skin": "Stained Glass",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_stained_glass_light_large.24d1cb9e7a99e9b0e5663a245d65b56c42f36a0b.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "duals",
    "skin": "Emerald",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_an_emerald_light_large.242c719bcbe22fa3eb64b7ba15f48989cc9200d8.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "p90",
    "skin": "Baroque Red",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_am_veneto_red_light_large.3bfb2641e0b8e40c0c797a44bb448ec06eabe6b8.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ssg08",
    "skin": "Orange Filigree",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_hy_ren_orange_light_large.0de8202f23f893173f722278aca762d294371ad8.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "g3sg1",
    "skin": "Violet Murano",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_am_murano_violet_light_large.7a4ee0fb0e265881283e9282f5d79e8cea2635c8.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ak47",
    "skin": "Baroque Purple",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_veneto_purple_light_large.4d9f7f4ed3034ce7d712c68640eb33f9f66f5daf.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Orange Murano",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_murano_orange_light_large.cc6ae2c1c3aca79fe0f65be7f0f40f493eba55cf.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "Dark Filigree",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_ren_dark_light_large.ce4d6a4807c1a3c78ed3853f0fb7900b181db0d3.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "sg553",
    "skin": "Candy Apple",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_so_red_sg553_light_large.aa8a1ed5302193cf02c2814a772517ec2aec8115.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "r8",
    "skin": "Canal Spray",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_sp_spray_water_light_large.0f7d074b7c53419d9475b0eb68e7215d7f9dcc66.png",
    "wearMin": 0.06,
    "wearMax": 0.6
  },
  {
    "weapon": "cz75",
    "skin": "Indigo",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_so_indigo_and_grey_light_large.2d4d90e760b199522064e9635d1efdb11cdab34f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "scar20",
    "skin": "Stone Mosaico",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_canals_tile_light_large.75a40e82efbdfa0691e32eb98301f1b441a00f46.png",
    "wearMin": 0.06,
    "wearMax": 0.5
  },
  {
    "weapon": "negev",
    "skin": "Boroque Sand",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_hy_veneto_tan_light_large.f8a6e484f7ebc5dbf1f52e0ef9b0c4d7c5054a0d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Navy Murano",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_murano_blue_light_large.b294cab668b3229243676838e2542b893b5dcbfa.png",
    "wearMin": 0,
    "wearMax": 1
  }
],
norse:  [
  {
    "weapon": "awp",
    "skin": "Gungnir",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_gungnir_light_large.f80c285940f75cca58731d8ead6bd8be1c18e38b.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "negev",
    "skin": "Mjölnir",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_gs_negev_thor_light_large.5060a7a913b1716faf7e81e145d65e0b4081b20f.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "deagle",
    "skin": "Emerald Jörmungandr",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_jorm_green_light_large.db1045fee0af23f28bb4affd164d07e3aadd42ec.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "aug",
    "skin": "Flame Jörmungandr",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_am_jorm_orange_light_large.1df28085a1bc10ff726b8a54f5c94cca1880fd19.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p90",
    "skin": "Astral Jörmungandr",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_am_jorm_blue_light_large.4d15121e1a295202b46b7452b0a927c009cebb37.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "xm1014",
    "skin": "Frost Borre",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_am_knots_silver_light_large.73c743e4867ffc0525bc79c488dc90cc12ee53ac.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mac10",
    "skin": "Copper Borre",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_knots_brown_light_large.c968468f0f9fc526f7a12dd8a7f5ebd7fcc24819.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "scar20",
    "skin": "Brass",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_aq_brass_light_large.4b497f1e4a42a5c645181a1534cc28320e3f6842.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "cz75",
    "skin": "Emerald Quartz",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_crystallized_green_light_large.6ae192cbf47b2cb11ec47fcdcbad07a6a78fb3f7.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "usps",
    "skin": "Pathfinder",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_sp_labyrinth2_light_large.62697e5210fe32fc1b5bc3d525b197d53508950d.png",
    "wearMin": 0,
    "wearMax": 0.35
  },
  {
    "weapon": "duals",
    "skin": "Pyre",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_hy_gelpen_dark_light_large.064bcecab3cc87140e4a6e6f0f34cc3e00675d77.png",
    "wearMin": 0.06,
    "wearMax": 0.55
  },
  {
    "weapon": "m4a1s",
    "skin": "Moss Quartz",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_am_crystallized_dark_green_light_large.d9fbf93df4fb38d302a7dd8b2783ce738035a916.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mag7",
    "skin": "Chainmail",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_am_chainmail_light_large.e6d6e648f7b590f64af2805f59271a364f1b2283.png",
    "wearMin": 0,
    "wearMax": 0.22
  },
  {
    "weapon": "galil",
    "skin": "Tornado",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_so_tornado_light_large.afda126687661b7907d69932f66a45d3e7c85573.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ssg08",
    "skin": "Red Stone",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_so_rune_stone_light_large.008cb3ddaf106a019bc45143d61bb2e520ca50f4.png",
    "wearMin": 0.06,
    "wearMax": 0.5
  },
  {
    "weapon": "mp7",
    "skin": "Scorched",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_dapple_light_large.d78eb500eb366b42a585762582f34009835dd946.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "famas",
    "skin": "Night Borre",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_sp_knots_blue_light_large.1a6a2c6fe90198a053410d364dd48441b51fb1a7.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "sg553",
    "skin": "Barricade",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_sp_asgard_wall_light_large.4b11684f29f2153a5eaa7b3c162e7ed6665a045a.png",
    "wearMin": 0,
    "wearMax": 0.65
  }
],
havoc:  [
  {
    "weapon": "ak47",
    "skin": "X-Ray",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_xray_light_large.a16215bb471dac8cc257c13dbc03e24514a7f018.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "awp",
    "skin": "Silk Tiger",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_tigers_blue_light_large.4346995a5382cb8e6ba636335f3f4e94998a447f.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "mac10",
    "skin": "Hot Snakes",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_snake_light_large.0b91f21def06a39df43e93f6cd25cf13e4edfd19.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "glock18",
    "skin": "Franklin",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_money_glock_light_large.9866d8ea7d9b5c569377aef5fb19bbc74ea4058d.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "sg553",
    "skin": "Hypnotic",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_aa_vertigo_light_large.56c7e1c30b3239dbaab4ffef7905c48d77a35a50.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "galil",
    "skin": "Phoenix Blacklight",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_sp_phoenix_tags_purple_light_large.6b71292ab21580860b1dd716c5ce956bc99132ec.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "p250",
    "skin": "Bengal Tiger",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_p250_tiger_light_large.c9afe189e84a6df33578138afddab06252e2621b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "deagle",
    "skin": "Night Heist",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_heist_plans_purple_light_large.737fb624218d14185e259e9f0af20ae1626a0e0b.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "negev",
    "skin": "Phoenix Stencil",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_hy_phoenix_tags_red_light_large.6d8ee0ad8e74ea1a6c6af60824445bd1450e34ac.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "p90",
    "skin": "Tiger Pit",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_am_tigers_brown_light_large.853f8f5151285d07fa9e03527bf14dc40347c25e.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "nova",
    "skin": "Rust Coat",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_aq_steel_light_large.01de004c646bf108c25c61e88af29720164da476.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Vault Heist",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_am_heist_plans_yellow_light_large.5d416001244a233cd2e9feabc4046b5788c3b051.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ump45",
    "skin": "Houndstooth",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_hy_houndstooth_brown_light_large.f90a2f46ceb0de3a2de44d92004b3a42cfa95e75.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "r8",
    "skin": "Phoenix Marker",
    "quality": "industrial",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_am_phoenix_tags_blue_light_large.c98c31a965c8c89fe1c7ee5c5774daebef5a5c27.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "m249",
    "skin": "Predator",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_sp_zebracam_light_large.d0d25a58f276d6a538eab874f1f4aa5724f37b6e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "tec9",
    "skin": "Phoenix Chalk",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_hy_phoenix_tags_lilac_light_large.aea02b337e17a45482f1122047c756b9c8166249.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "duals",
    "skin": "Heist",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_am_heist_plans_green_light_large.a4c7acda57bfceac6b4e25708bfd4881e9bed5e2.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "sawedoff",
    "skin": "Clay Ambush",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_hy_tigers_tan_light_large.6e52ecbb72de6bd0786141efefc3e7040989b6d7.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ppbizon",
    "skin": "Death Rattle",
    "quality": "consumer",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_nerodia_light_large.6bef659d5403a53618b7bf7f5448d537395114f9.png",
    "wearMin": 0.08,
    "wearMax": 0.5
  }
],
// Generation 1 knives
knife1Old:  [
  {
    "weapon": "bayonet",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_aa_fade_light_large.5ac4f422043b48b47e4453cc250c79fda3e78855.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bayonet",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_am_zebra_light_large.2234064362204e87ea5ce3f997dc691d844d9168.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "bayonet",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_bayonet.515de291204d6d896724d9fbb6856fcc6054a787.png"
  },
  {
    "weapon": "bayonet",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_aq_oiled_light_large.920866e2a1f17fda7702e0b4cb95f45a8a8c0070.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bayonet",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_hy_webs_light_large.9246001fd8c8b0c077dc2836ea7271a4a020750b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bayonet",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_aq_forced_light_large.460998cd194f90f65aec10ccaea8644b42430fc0.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bayonet",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_aq_blued_light_large.40905736c36dbdb9d08077ddaebb06cbb237f583.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bayonet",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_hy_ddpat_light_large.f53cb47d0ef8b431116008ec3896f8cedb712fb5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bayonet",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_so_night_light_large.11b2117af2e0f240111305857ab93e0091e347ed.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bayonet",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_hy_forest_boreal_light_large.4ecbfdb740d7345cb38430c1a4da15cec468b5ce.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bayonet",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_sp_tape_urban_light_large.81c4d2a06c2d8c271a2b6de4bc47f0cb0d3f32be.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bayonet",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_sp_dapple_light_large.5c6962d79b65eb2053770a887facae88b361fcfe.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bayonet",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_sp_mesh_tan_light_large.f0c1b71fd210b74b42dbf78253556e7ba9a99d15.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "flipk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_aa_fade_light_large.811f8e8af2e00675c047a9c1e9f04bbe5ace83b1.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "flipk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_am_zebra_light_large.55467fb65475d82c452bc96180d101ffd7e76192.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "flipk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_hy_webs_light_large.e0bcc9e1d004bff0af07abc34a609c6654835ce6.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "flipk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_flip.ebfc00735792b1e2947b30a321a07215dae8ceed.png"
  },
  {
    "weapon": "flipk",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_so_night_light_large.cd613460bfdf848992e25f0a45aa3ab17b6d46b6.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "flipk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_aq_oiled_light_large.14589d4f366330490824f36e7f75219478e2cabd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "flipk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_aq_blued_light_large.495efc692fdc551331e407697152d98c990272c3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "flipk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_aq_forced_light_large.e9a6576a928a11fc3771b302f2b66539db29b503.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "flipk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_hy_ddpat_light_large.882d1120e7e558969121902d618da80b88105c3a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "flipk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_sp_tape_urban_light_large.bd1c04395ea024acb863acb628becf77edd4e4eb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "flipk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_hy_forest_boreal_light_large.d4878851507a64925cb11000bfdab55caeb3e07c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "flipk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_sp_dapple_light_large.fdfee11d1148f81582f438cf1fdf175717c71a0e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "flipk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_sp_mesh_tan_light_large.361c846ac7bce512f7077df8b8bd62da838ebe2e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "gutk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_sp_dapple_light_large.657af646f54600080b5c5e79133410eb47397fd6.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "gutk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_aa_fade_light_large.6e89c23706eafc34e7713c264fddeb94444a9b67.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "gutk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_aq_oiled_light_large.f141737f74526886d0d4895281e9a57526314c5c.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "gutk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_am_zebra_light_large.c374f8e71f300e4351b680b6246da645d3dea01d.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "gutk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_hy_webs_light_large.217a769ed0131db1d3aef5a40bc927d4470bb22d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "gutk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_aq_blued_light_large.0e40bb0e3eb5de3de1b925853e3e4ec755f9b65a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "gutk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_gut.1d53007384970e8eaf28448312777683fd633a79.png"
  },
  {
    "weapon": "gutk",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_so_night_light_large.eec2bb404a436b6d74f19c72b88f70380ab31eee.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "gutk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_sp_tape_urban_light_large.71f4811888602d3b48f35e030bd39ecbcac7f22e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "gutk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_aq_forced_light_large.3f5b057c710fc4403f54d3979f482f511eb69d8b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "gutk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_sp_mesh_tan_light_large.5f58d777d76148ba031b587fff1b0b3465d2c441.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "gutk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_hy_forest_boreal_light_large.b28a4cfb134cd8be5da39f82db0df407577478e8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "gutk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_hy_ddpat_light_large.855f6ca62686c8f365e503d379b07b4c41a8658a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_karambit.8b491b581a4b9c7b5298071425f2b29a39a2a12f.png"
  },
  {
    "weapon": "karambit",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_am_zebra_light_large.88457fbeca42e9dc1767983c76219d34b46abf14.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "karambit",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_hy_webs_light_large.61217494aaae26081c31d87f15739f42b4c1444a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_aq_blued_light_large.14e928cdede91a05a47656bc1a470cd515b9d735.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "karambit",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_hy_forest_boreal_light_large.8be99b9b53275463ecac09d080359af3526c4e81.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_aq_oiled_light_large.52f9229d2960f5557a893a99cc679f1181b48d98.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "karambit",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_so_night_light_large.427484b82687b9eb24e38125f5ea9e983847f68f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_aq_forced_light_large.548f11f88cda9d7dd2915bd53d17e319d28a60ed.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "karambit",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_sp_tape_urban_light_large.d36d1cf81823ad0463a42ff3a8d9b1aff4910a73.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_sp_mesh_tan_light_large.a2d4ccf9954b957c819ade72a1cbea7ca0f0ad1f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_hy_ddpat_light_large.4ce3d0d597a1481ff4cdc9ecc8c171748d492832.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_sp_dapple_light_large.88adf51bc8d53efc0d8c04114bd03d388e00d2b8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_aa_fade_light_large.c91680d753adc2fcc5ed2e45daf815f6d4ab50b7.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m9bayonet",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_aa_fade_light_large.66027f3a763a8b0a89895f3bdd55485d21d8dcda.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m9bayonet",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_m9_bayonet.1a55109e0c88792e5d56ea04dc1f676e44f9dec2.png"
  },
  {
    "weapon": "m9bayonet",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_am_zebra_light_large.53f9641b2b66b6587f779e5f222cc98a48489a1e.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "m9bayonet",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_hy_webs_light_large.5beb986be2c0fd1a6dde6cc3f360fb1a4b77823d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m9bayonet",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_aq_blued_light_large.cf1eae5b0d42c0c265ee77addcd1207eba7a8a4b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m9bayonet",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_so_night_light_large.5acbbec44a12a3d5e53890c7a2e58aaf83ae2871.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m9bayonet",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_sp_dapple_light_large.b810fef46499697606ff2c70139805beb784c5ae.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m9bayonet",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_aq_oiled_light_large.75bfecf8e9073c05ba21251889b8d49889f90669.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m9bayonet",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_sp_mesh_tan_light_large.10896c7c3028779b668885a229e5ba773637b69c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m9bayonet",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_aq_forced_light_large.e409b18452030f3efa41178b439556d6f067fa52.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m9bayonet",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_hy_forest_boreal_light_large.074a7a96a875a57e6ad16e8a678245f23e7d46bb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m9bayonet",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_hy_ddpat_light_large.1f511e46981a71dc67aec2904af5c7a39de52268.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m9bayonet",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_sp_tape_urban_light_large.b940d9da196a99dfa10f08a89c6d2843b5844fef.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
knife1Chroma:  [
  {
    "weapon": "bayonet",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_am_marble_fade_light_large.adc286f39c98a9630620a97831ca2e5050229dff.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bayonet",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_am_doppler_phase1_light_large.2de778920740e6c402ab6ac36ff5e9410196fbe8.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bayonet",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_an_tiger_orange_light_large.780ff3a58d01a73d4d7d755adbdca46483d13faf.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bayonet",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_aq_damascus_light_large.bd2b3b3fcd70fdec736a782fa5108ea9286d86a8.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "bayonet",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_so_purple_light_large.c7f08cb18f5cc792a27e186ee630614b93c35200.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bayonet",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_aq_steel_knife_light_large.3a913d1a41833bcfb673a31cfdf3fddb592f2f85.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "flipk",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_an_tiger_orange_light_large.441c0d2cf427d90fb079e82af0d074c1bfad13e4.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "flipk",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_am_marble_fade_light_large.57a993ab6632bab742dc96e8ebedf98473fa5b48.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "flipk",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_am_doppler_phase1_light_large.64fbc93188ab47caa83c6bbde2f3940562f1b237.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "flipk",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_aq_damascus_light_large.9b08bc30249a431d8ea084daf7d9fcb8da5e0e19.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "flipk",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_so_purple_light_large.6a76bb50dd3ebf15bd94cc5e0d39daf34b02270f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "flipk",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_aq_steel_knife_light_large.3be134e0b20c32442d7b508a2ec065af3c59ea89.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "gutk",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_so_purple_light_large.dbe6989416501166c43bd1cfb18ee835dbfa0ac7.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "gutk",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_am_marble_fade_light_large.85f1cad22ba4e6716045d53e9e0cf5459760d152.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "gutk",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_aq_damascus_light_large.9eaf9c050c3f5dfe5c647d361538a1ea7001f835.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "gutk",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_an_tiger_orange_light_large.4590d3a96661c5e54af3285cb237077fc63d486b.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "gutk",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_am_doppler_phase1_light_large.2a4881ccbbddc3cc0969575b87dc33b7079508fb.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "gutk",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_aq_steel_knife_light_large.d56ab6033e5da6115f6af2aba93bae8edde57cb3.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "karambit",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_am_marble_fade_light_large.e5d0f471cc4aad8ddd6ede429afe8cd2d80c1cf2.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "karambit",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_an_tiger_orange_light_large.cd5a9d7da1f15b5360e825b7d8261210ce717643.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "karambit",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_am_doppler_phase1_light_large.16c0819028af598b772826c2bc675712a1d5af37.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "karambit",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_aq_damascus_light_large.47a76f786c10dcd8e0cabbf7d0ffaec93ea9960a.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "karambit",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_so_purple_light_large.c30d6c61e9ec2e808b845d594a615e4623d56ee5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "karambit",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_aq_steel_knife_light_large.fe0b528138096b68d213ad497a76396483f68f50.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "m9bayonet",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_am_marble_fade_light_large.732b2c0e3c297968ccc0c7ecde0438ab995f9720.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m9bayonet",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_an_tiger_orange_light_large.49d5afb6d7f17cb0b384be1416a9533841174ac5.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m9bayonet",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_am_doppler_phase1_light_large.1a9960a6bba1a82aeab00b0207b4ff7c423a1f06.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m9bayonet",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_aq_damascus_90_light_large.c8510c6e031c61d9c1c2421df3b912125547dc83.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "m9bayonet",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_so_purple_light_large.5ca833ab51b7a972d9b5bb7792c88957a69c4b4c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m9bayonet",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_aq_steel_knife_light_large.b89310b9d111f845adf87260417a732028154f27.png",
    "wearMin": 0.4,
    "wearMax": 1
  }
],
knife1Gamma:  [
  {
    "weapon": "bayonet",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_gs_bayonet_autotronic_light_large.4b7f809f4ee434dff8f270b041100012f39c5ebe.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "bayonet",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_am_gamma_doppler_phase1_light_large.02bbfec15811bc1679479107af0cf5c6652e40f1.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bayonet",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_cu_bayonet_lore_light_large.372c7e0ec654f3be5d53e87cbbac3ab160c8c76e.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "bayonet",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_cu_bayonet_stonewash_light_large.0f931ca831c405927983d5b2ca3120aa9363d7d3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bayonet",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_hy_ocean_knife_light_large.d262ade9c249afcfbeeacf19deef49ccb0049c1a.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "bayonet",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bayonet_am_marked_up_light_large.c2a4dbca9338c1a5ffaa246715696f92168a49bc.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "flipk",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_am_gamma_doppler_phase1_light_large.7bf92c117841e553340bc5c0d0266cb458b92249.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "flipk",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_cu_flip_lore_light_large.df03b3186c105676470d2ac73e4bea375fedbf77.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "flipk",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_gs_flip_autotronic_light_large.882d012ef1e758c9e323dd5d6202c49fbe894e05.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "flipk",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_cu_flip_stonewash_light_large.e6f71d193d2965b443ede7015911feedfea6e5a8.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "flipk",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_hy_ocean_knife_light_large.6d35f9bc8d0ab2da7112155cf37ef782e542ef31.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "flipk",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_flip_am_marked_up_light_large.6420438f1930c72f9aee1fb6d2e1e41238caf340.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "gutk",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_cu_gut_lore_light_large.5cf5a77978675bd3d276a86017e6d1fcacd7bf00.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "gutk",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_am_gamma_doppler_phase1_light_large.aa0ee6d430814b265636f404ab85553e71f3450d.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "gutk",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_gs_gut_autotronic_light_large.160e79d868da6ebb84c52e835aaf24ab9c6334f1.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "gutk",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_cu_gut_stonewash_light_large.52a1c223ee5d85ddb2242c75a67c1f2f49b0e0b9.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "gutk",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_hy_ocean_knife_light_large.649f890d55e6ee2987e988e44a0f52e1a5020486.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "gutk",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gut_am_marked_up_light_large.08dac4cfbf7b626df37bb2b6ffd3d07d2fc86988.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "karambit",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_gs_karam_autotronic_light_large.5af6c108ce38f71f0964f1bbd06bc48c1d3e5462.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "karambit",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_am_gamma_doppler_phase1_light_large.769cf2ab676ea2a7d7322c258f57bac8dca00336.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "karambit",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_cu_karam_lore_light_large.7090aea57b3a2abd82e09f0cdb840ac72f41df73.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "karambit",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_cu_karam_stonewash_light_large.a45dfc7db5703c23ef3e5733fcc4a7b2a9bf6d73.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "karambit",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_hy_ocean_knife_light_large.f108e6440259472084635566f62d7497b9d5ab51.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "karambit",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_karambit_am_marked_up_fine_light_large.8814a38afa2383489a723019fc9e6e43f021f047.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "m9bayonet",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_am_gamma_doppler_phase1_light_large.4980cb2bb09e19a48a04ae19a0e6353426e81cce.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "m9bayonet",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_cu_m9_bay_lore_light_large.b4bfa26d570d440ee4c04244605a81031909da2f.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "m9bayonet",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_gs_m9_bay_autotronic_light_large.f81f68f78b0b40717602fc88f62b4d7af346c430.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "m9bayonet",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_hy_ocean_knife_90_light_large.7c349b48ff79eb591eaa741aff78a0e086feaa4d.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "m9bayonet",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_cu_m9_bay_stonewash_light_large.addebdf2a1eb13e40ff7102e7a918d116653414b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m9bayonet",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_m9_bayonet_am_marked_up_90_light_large.30a346e62c77a9552fe7ce89eca7c44e018aafd5.png",
    "wearMin": 0,
    "wearMax": 0.48
  }
],
// Generation 2 knives
knifeHuntsmanOld:  [
  {
    "weapon": "huntsmank",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_aa_fade_light_large.6f2163cce4ff116224f809200c9e928dbfe1c92a.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "huntsmank",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_aq_oiled_light_large.b43d1ca603f2c69764001a6b5f24f2856a6f0a65.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "huntsmank",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_hy_webs_light_large.ef2461c032877bf7d6b1600cfa1c21317bc9c460.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "huntsmank",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_sp_tape_urban_light_large.b1741a783b7017d5bf191ec9ab8f3a5427718294.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "huntsmank",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_am_zebra_light_large.1296d76d34f1e5738524c808f365584a38aaf6bf.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "huntsmank",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_tactical.7621bbad70410deb629d60ed98ef248dac525356.png"
  },
  {
    "weapon": "huntsmank",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_aq_blued_light_large.7c438b3c70933dd0e6b807a5690a777c3079843f.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "huntsmank",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_hy_forest_boreal_light_large.b67d3d1910d57252f27749a5e275354a7447e8d3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "huntsmank",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_so_night_light_large.b0f1183807fcb10c3592200d569dcc79073d1515.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "huntsmank",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_sp_dapple_light_large.f1e2b1478299963ebdf9c822bfc6efbabc1ec1c8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "huntsmank",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_aq_forced_light_large.ba0ab23cf7421f130454b3e1816eb3302b588712.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "huntsmank",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_hy_ddpat_light_large.109687895d7275eb80f4a78f212ecbeb81b3bdcb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "huntsmank",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_sp_mesh_tan_light_large.314ea654cdba9c910a3872442245d2268be404cf.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
knifeButterflyOld:  [
  {
    "weapon": "butterflyk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_butterfly.794147e84a4e9426202d45145910cbb007797ce5.png"
  },
  {
    "weapon": "butterflyk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_am_zebra_light_large.8f5d28f8b8607d83059c4df618b399e2fa551bb4.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "butterflyk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_aq_blued_light_large.969518ce760404d72095af853f90df7582e7889f.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "butterflyk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_hy_webs_light_large.8e3a3668a8678a4ce56b2675c60d7ec6a756827a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "butterflyk",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_so_night_light_large.9f2544c35867a540f1d0a5e446d10d35b4bb3202.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "butterflyk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_aq_oiled_light_large.d53e80b706e7d7fac9d22d265595ea1a959ea79b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "butterflyk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_hy_forest_boreal_light_large.f817483d1e53b69919a8a11349b075c27d8829b1.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "butterflyk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_sp_tape_urban_light_large.dab43f48bd2eb2c9734c90b5482f222eaa95cebb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "butterflyk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_sp_mesh_tan_light_large.9c30ece5beb38356f406e5c5fa56e7f4056f0757.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "butterflyk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_aq_forced_light_large.1e52259f8bd6b3c242cedb2d0a879e9fc17b7a23.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "butterflyk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_hy_ddpat_light_large.6e874d0a6db5d1468c3b5b99c303bf76837593fe.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "butterflyk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_sp_dapple_light_large.6110a91f809c996696fa87d90b7ea88e0377d0df.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "butterflyk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_aa_fade_light_large.b1ab5fb3ed08185a266334b6488a364bb3f220f8.png",
    "wearMin": 0,
    "wearMax": 0.08
  }
],
knifeFalchionOld:  [
  {
    "weapon": "falchionk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_hy_webs_light_large.9c355c7819b8fd993b543bceec976e798e6e8633.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "falchionk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_hy_forest_boreal_light_large.9bf4abd73deee0ae82ce0a8670e1056d3a546107.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "falchionk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_aa_fade_light_large.1db6bc12f4b49677b330382c3e5af21f46d0c124.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "falchionk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_am_zebra_light_large.3cbce2191d2a20b88e610d8180c2f4a9ee0066ca.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "falchionk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_aq_oiled_light_large.ddcd8f4a87e08ab50fe3241e6791896125c48e03.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "falchionk",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_so_night_light_large.535e93982805360eacc5969e1b28fe64f15216fe.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "falchionk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_falchion.adcc43a018fd4fe315dbdbc7960cfc52c5d63e3e.png"
  },
  {
    "weapon": "falchionk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_aq_blued_light_large.ead09a065b115e707a59aa49689af0ed3dd8d1f3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "falchionk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_hy_ddpat_light_large.3b2857b99bb2aa1b1337248d8a1ae24aae1bf450.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "falchionk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_aq_forced_light_large.3b986dfc395e6607d1f05fcd1f3e6b8c2c2c1f59.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "falchionk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_sp_dapple_light_large.072bd4143a0c769f2d78835eaee88de49c849bd3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "falchionk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_sp_tape_urban_light_large.c3904e816bfc30cd130a7a1865ef37a32ed03434.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "falchionk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_sp_mesh_tan_light_large.eccb7999f574f5e1080dfef159c3903c4e6db0de.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
knifeShadowsOld:  [
  {
    "weapon": "shadows",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_aa_fade_light_large.f73d939a3358a126ffbb7b93c9f87b9b78a6c78f.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "shadows",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_sp_tape_urban_light_large.b443359282b2cbc75c2cc765af8c9a00e4b2dfdb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "shadows",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_aq_forced_light_large.2ceafeb104afeb40f9ba4c7a7cc4d590bc36c3dd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "shadows",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_hy_webs_light_large.df749be6007a8df0ed8ee572e42151235ef7cfb8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "shadows",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_aq_oiled_light_large.cbcb75a234d66325b56318abcf1d1cc8ebe7b893.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "shadows",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_am_zebra_light_large.a09a6cf348b102f80e87226cc71d03544e502703.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "shadows",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_push.13f409f23e653107c90711e5ab258b52b187ff6a.png"
  },
  {
    "weapon": "shadows",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_hy_ddpat_light_large.a5821bfe03d91034b78b0aaf1eaa50cf556645b3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "shadows",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_aq_blued_light_large.e0b2ecdeec3fb3066cecaf5b2d9392bfe4dbc674.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "shadows",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_sp_mesh_tan_light_large.b6b390c3652c2bc1c074cd23b3ca921bf9870b4b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "shadows",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_hy_forest_boreal_light_large.81e69f4bcf6d0cd60f909a0b6722e8bc12b982ca.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "shadows",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_sp_dapple_light_large.2f7cde55a22c5cd038bceb38533f5397a9fc8252.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "shadows",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_so_night_light_large.6bf4ccf0b4c054ad19beb4d3da884cae5fb2a302.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
knifeBowieOld:  [
  {
    "weapon": "bowiek",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_aa_fade_light_large.fd85e3d9fbd875ca2551b3758f5374e33d167fbf.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bowiek",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_sp_mesh_tan_light_large.360aa198bded3bec8d3c051bd1d6dc7270b3b91f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bowiek",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_am_zebra_light_large.2ecbba9bd0e985ca0ae66ea95e7ef497358389d1.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "bowiek",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_aq_oiled_light_large.5d61d6e094f21b2e857f06fc6123ad4d1fe96193.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bowiek",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_hy_webs_light_large.d03e755f33f66df9ee9d8b1cf50b633ff458978b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bowiek",
    "skin": "Night",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_so_night_light_large.d0d6c2e5a296631fd0531172663499095030c2b2.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bowiek",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_sp_dapple_light_large.491c0483853ac7568ae0d98a09b5ba6e9b757411.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bowiek",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_aq_blued_light_large.d24c03eb5e7feb65ba397f5aaca5f1304acefc62.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bowiek",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_survival_bowie.01addb54d400815308b1d312290594a3177dd55f.png"
  },
  {
    "weapon": "bowiek",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_aq_forced_light_large.dc9107ac17070401b6be113e1af07b1fe257c951.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bowiek",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_sp_tape_urban_light_large.8038d2ef3b412fc5151061528702309da2a71545.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bowiek",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_hy_forest_boreal_light_large.439a6bd0f88b3caa73d7ea847452a116ed1ecec7.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bowiek",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_hy_ddpat_light_large.41ce1d0d829bdfe39882a843045a2a940da6be8f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
knife2Chroma:  [
  {
    "weapon": "bowiek",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_am_marble_fade_light_large.ee64f39331b11b42f6ef7e00f570bc0da09cf0ee.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bowiek",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_an_tiger_orange_light_large.a8cf2f4214c950f59798f15d0013f7a33e6972fa.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bowiek",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_am_doppler_phase1_light_large.0885508f274028c4fb173666aaf019f448955904.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bowiek",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_so_purple_light_large.af202da5d81b8667477667b6db332769a96bf80e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "bowiek",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_aq_damascus_90_light_large.b53066882790815ba15f508ac268f29cd6cedf2a.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "bowiek",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_aq_steel_knife_light_large.3a61b0cf23bfa737be1cac012f4cdcde14347921.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "butterflyk",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_an_tiger_orange_light_large.2fece0b06a84ce2bb6e15e7cd3a37f400f218940.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "butterflyk",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_am_doppler_phase1_light_large.f1a9efe3dd02dc7022773eaca3642988561cdccf.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "butterflyk",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_aq_damascus_90_light_large.f6eecc56e9d69742d80ad0bf59695a89cb8d9684.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "butterflyk",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_so_purple_light_large.116c48bf6a4a33f56d11b3204919422aa58f9337.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "butterflyk",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_aq_steel_knife_light_large.033e7505158efd2a1758a7144ccccfb554fcf576.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "butterflyk",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_am_marble_fade_light_large.c9170bcb854e5d3ed0f3a22bae8a4513fd46954a.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "falchionk",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_am_doppler_phase1_light_large.5537c126b8361ecca31195120cb92642f1768518.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "falchionk",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_am_marble_fade_light_large.6702e01c69bbdd050ed27964385eaf57fd96d579.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "falchionk",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_an_tiger_orange_light_large.c467ce8f738dd9bce8cd7af54610f9186dadd362.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "falchionk",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_aq_damascus_90_light_large.9bd7e0f1d32a177ab01bc8c52a51dac9ad61e5a9.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "falchionk",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_so_purple_falchion_light_large.010830e050576efeb80b3e046d9dccf6ee21c31b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "falchionk",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_aq_steel_knife_light_large.6d5b1f9bbc924ae1335175a262a69b1587448ccc.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "huntsmank",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_am_doppler_phase1_light_large.07b42e9787a77143df3cafe19202ba9ba7d90706.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "huntsmank",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_an_tiger_orange_light_large.961c75c287d5cba0859ef13ed8eb638d707b1129.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "huntsmank",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_am_marble_fade_light_large.3efc76764c1aa62477fee4b4df1a380b115f5103.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "huntsmank",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_aq_damascus_90_light_large.f81def489661a18ae741c49011d70f163552cdce.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "huntsmank",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_cu_purple_huntsman_light_large.3d9355c0a0c0c170d10856ebc2492fef61832fbc.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "huntsmank",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_aq_steel_knife_light_large.1e93732da4a5534deaa88e65c22274c57f2cd924.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "shadows",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_am_marble_fade_light_large.fce3f43a307394dcfa71988787dbb5d2ef6a3611.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "shadows",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_am_doppler_phase1_light_large.5414da84cceba08b21dcdbb35b77f43c358921ea.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "shadows",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_an_tiger_orange_light_large.dc3ed0014b7b2024a7fbcaaaca1fbbfae3331735.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "shadows",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_aq_damascus_90_light_large.682e0e63f745ebea76a093e8ff4f7cdb17d5d093.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "shadows",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_so_purple_light_large.af1841afc5146b836e87e6afab49f9a78d90ed1b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "shadows",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_aq_steel_knife_light_large.2753f1bc2008c99c34103b2b247801d3eb881d20.png",
    "wearMin": 0.4,
    "wearMax": 1
  }
],
knife2Gamma:  [
  {
    "weapon": "bowiek",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_am_emerald_marbleized_light_large.a30b95a1a77d51fb98fd6d3907681a585a80fdc9.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "bowiek",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_cu_bowie_lore_light_large.83091fde14cb5dea85805779420387bdd18c6126.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bowiek",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_gs_bowie_autotronic_light_large.a46c7016c6c3f560a37d1b275d75eb13409b3bd0.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "bowiek",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_am_marked_up_90_light_large.bd2b6bb2dd167a95ec825080b3d660d30bb0746b.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "bowiek",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_gs_bowie_black_laminate_light_large.8a560187eab8572277baf66df778ec7c7f44ee4c.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "bowiek",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_survival_bowie_hy_ocean_knife_90_light_large.d668984765aa68bc3aeed67b82500c41a8e2f172.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "butterflyk",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_am_emerald_marbleized_light_large.92ea85ebc4ef4af38ea480c332353a31ec8947fd.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "butterflyk",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_gs_butterfly_autotronic_light_large.02e4e5002d0b54d85cc3d527fe745a614e72405e.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "butterflyk",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_cu_butterfly_lore_light_large.7de06f8ef2e44dc3a0a6b759140a35aefe59045e.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "butterflyk",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_hy_ocean_knife_90_light_large.ff79fcd689714fb0abe4f6ec44effa3806e95df1.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "butterflyk",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_gs_butterfly_black_laminate_light_large.7399803d86f626240620bff4fde08d1d01efaa7b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "butterflyk",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_butterfly_am_marked_up_90_light_large.a715b25d22f9c716ec30dc8a64aa652dcffab61a.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "falchionk",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_am_emerald_marbleized_light_large.86b54169ca00cfa482715e49b558e9e74776a669.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "falchionk",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_cu_falchion_lore_light_large.fba0529146c0e183190f1503b416a8e9fd287559.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "falchionk",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_gs_falchion_autotronic_light_large.6bd228d144c25d432c94cd77a5c41ecb8a31b8fb.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "falchionk",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_am_marked_up_90_light_large.e65fca4dd2721b81b733edfef05d4408418ba163.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "falchionk",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_hy_ocean_knife_90_light_large.751cd471f5ba17b199108d44ed9a5044c7bab732.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "falchionk",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_falchion_gs_falchion_black_laminate_light_large.f03942bc21e426af403c2460771932675c584b44.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "huntsmank",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_am_emerald_marbleized_light_large.43b6d17284458f0da7ece2d7c0a6d7039d2a6d8c.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "huntsmank",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_cu_huntsman_lore_light_large.0747f41411d209fdb94618313d6e350eb32dd3b8.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "huntsmank",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_gs_huntsman_autotronic_light_large.b9187e80330af454e3ec7d8aa3a3522f64025ebb.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "huntsmank",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_gs_huntsman_black_laminate_light_large.5062d0442cbc9627a5968a1b863188f508436b51.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "huntsmank",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_am_marked_up_90_light_large.cd9f689ef3a0d38cd51dd719a3c60e30583826f7.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "huntsmank",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_tactical_hy_ocean_knife_90_light_large.bad5c8a03078670bbd69cc054129b9aa5194bf77.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "shadows",
    "skin": "Gamma Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_am_emerald_marbleized_light_large.a3bf52321781af65f8bae2f4ad0ed6f3b884dea0.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "shadows",
    "skin": "Lore",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_cu_push_lore_light_large.75720207a6f8db9d7c8b6a92c111c776ebd35508.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "shadows",
    "skin": "Freehand",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_am_marked_up_90_light_large.cbfa16ed4ffd00d17f847b46677d5e4cb58dd5f1.png",
    "wearMin": 0,
    "wearMax": 0.48
  },
  {
    "weapon": "shadows",
    "skin": "Autotronic",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_gs_push_autotronic_light_large.1d26831dadf0671d84189d666e93dc7ed66a551e.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "shadows",
    "skin": "Bright Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_hy_ocean_knife_90_light_large.6e7dab80593b417dfa54ce18c0ed680a1e45f1f6.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "shadows",
    "skin": "Black Laminate",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_push_gs_push_black_laminate_light_large.bf834d934ea9cb25f7264958307e390d567b1581.png",
    "wearMin": 0,
    "wearMax": 1
  }
],
// Generation 3 knives
knife3Old:  [
  {
    "weapon": "navajak",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_aa_fade_light_large.230f96c68e3dfd7936d76b44d7093cdc109b0d45.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "navajak",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_hy_forest_boreal_light_large.be1b7fb6471b0630f0709e3b8546e60d8a35fc12.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "navajak",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_am_zebra_light_large.d05268ca27ffc151fc41aa706c2fd809a30b4a93.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "navajak",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_sp_tape_urban_light_large.c73dbd39174d78663ee57fb6d81a4ab90f3da3e8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "navajak",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_gypsy_jackknife.1a7e57791fa9383cce67d5915ffc442c7de2694a.png"
  },
  {
    "weapon": "navajak",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_aq_oiled_light_large.bda53914823c916e925f1ccfdccb779438a837e7.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "navajak",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_hy_webs_light_large.56c049ebbe3f61c39bbc61b9658566ae4caf0998.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "navajak",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_sp_mesh_tan_light_large.f8ae9f3c56bce9253b10d8c390894faa344d30ed.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "navajak",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_sp_nightstripe_light_large.bb637d2594b3d5c5f4bcb82a040be380660b772a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "navajak",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_aq_forced_light_large.ae7a6c5d03a34e2e9bb1510624dbd852a6b33367.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "navajak",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_hy_ddpat_light_large.2b9ad6c3016e78b55f6b245c25e7a373f05993d1.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "navajak",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_aq_blued_light_large.1ce2d4556d50d1c13ca50c65a9a68f9e943ab147.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "navajak",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_sp_dapple_light_large.879ba0d22ebaccd2ba4b62c753e2db58b855a7a0.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "stilettok",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_aa_fade_light_large.ce3b2f6ddc0a2c5443128f535d8fa1be1a80d7fa.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "stilettok",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_aq_oiled_light_large.fe6a14eecfeddcf502472e7071aa7ee33a3fd727.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "stilettok",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_am_zebra_light_large.1c3f0dc6443fdf2cd48cc7e8f7f8c1a3ebf20d9d.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "stilettok",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_hy_webs_light_large.5faae0b5462955594df775952fbd16200c430af3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "stilettok",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_stiletto.1aefe4ca0e433fc8c3f924ba362283e0666b5f8d.png"
  },
  {
    "weapon": "stilettok",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_aq_blued_light_large.0366c863267920e2d9155d01429f383c7d95b94a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "stilettok",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_sp_tape_urban_light_large.6471b71d87d11a53873fd901d17e689bf945c15e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "stilettok",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_aq_forced_light_large.7c6f16082961e6365d54670283906c6b58da3c33.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "stilettok",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_hy_forest_boreal_light_large.be53b843654a400a4c5a6787c6237f6909e296ce.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "stilettok",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_sp_nightstripe_light_large.e8a72a1a946f0853352ed95bd28bdde5e30be953.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "stilettok",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_sp_dapple_light_large.021b56519632ef7e817de82729f958d7729c613e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "stilettok",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_sp_mesh_tan_light_large.6fb75993eb2008e63935a1e580aa8ffc8eceff9a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "stilettok",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_hy_ddpat_light_large.5299dd8f879d980863dbf503343dec7445d60716.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "talonk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_aa_fade_light_large.54c2c841e44a279e001873f80f987885780bb156.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "talonk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_am_zebra_light_large.80afcfbe0e2aa2435c037524713ac9411c15cae9.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "talonk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_aq_oiled_light_large.795e56b68c0c7319470b7103b093dc48f9c47311.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "talonk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_hy_webs_light_large.875dbed68ca5405a6d2e66e5456a4e712c758342.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "talonk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_widowmaker.a0842ad04cda9292483b8896d1dcdaffac9c2e5e.png"
  },
  {
    "weapon": "talonk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_aq_blued_light_large.5f9fddb9d8623257d62f544027dcf305a087bab1.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "talonk",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_sp_nightstripe_light_large.0c88154966c609dd394248e955a5db8b2c8bc5b7.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "talonk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_sp_dapple_light_large.5910908e7cd893a87b6517b8f6eb439769a1f060.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "talonk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_aq_forced_light_large.a0176c574002b3f41cdd8df96d61342bf6aa8c7b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "talonk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_hy_ddpat_light_large.2f4c3c3f6fbc43a980ab3e9dc173ad686655f8cd.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "talonk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_hy_forest_boreal_light_large.593dd2a8c4d229e052107a442d7922a4e6846c0f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "talonk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_sp_mesh_tan_light_large.d0fef03f781d895f204c4888463753ca250397a4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "talonk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_sp_tape_urban_light_large.f667d0db45fdef79c8aae2c6dc922b91fd2e98e5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ursusk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_aa_fade_light_large.0b6899d17a60306b6279e6fbee981acb530665fc.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ursusk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_hy_webs_light_large.831c519791469faa767e2ab582d8e7a8f2631267.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ursusk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_am_zebra_light_large.8ee56f4ebe2527ddb5789f4e7be3352873f597fa.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "ursusk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_ursus.34ecda985c12503df5b88e9bda1826f61cc9e80a.png"
  },
  {
    "weapon": "ursusk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_aq_oiled_light_large.531627867f18fc4a9ef83b92740d96c4099364df.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ursusk",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_sp_nightstripe_light_large.b92f5208e7dc6057d78a7e54b8856d202c899f49.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ursusk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_sp_tape_urban_light_large.4c9e7e5dc1c789a5a6bf4452e6111f3a667d4f65.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ursusk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_aq_blued_light_large.a9cbb774b7ca472768b3aee15700060f138ab7b4.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ursusk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_sp_mesh_tan_light_large.368b82e4e9f516c85137ff87782f3989541326a7.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ursusk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_hy_ddpat_light_large.b32fccdaab716eabc5bdab046650f7c319d6d5b8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ursusk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_aq_forced_light_large.805b576db8e7c270129ebbf01326cacb00100f63.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ursusk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_hy_forest_boreal_light_large.40609f28dc570aeed3ef2906c0c2bd44665c5889.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ursusk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_sp_dapple_light_large.ea36749489631667cbad6045029f59b54a0705aa.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
knife3Chroma:  [
  {
    "weapon": "navajak",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_am_doppler_phase1_light_large.17057982c7aef22d3da7256a4a9c348e7087adbf.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "navajak",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_am_marble_fade_light_large.06edf782d11987a8a010edae38a1370c17dd5d5a.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "navajak",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_so_purple_light_large.4d3624f9c62d1cdecc29c24e49c58071a8e0aa10.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "navajak",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_an_tiger_orange_light_large.41be3bbfaf690be67956b8e7da920b29325f6bf2.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "navajak",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_aq_damascus_prisma_light_large.b1ef53963cc5daeade17b87af90a4ac173ecfdce.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "navajak",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_gypsy_jackknife_aq_steel_knife_light_large.a71a034e635cf59e5d308a2645656f90a072a5d6.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "stilettok",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_am_marble_fade_light_large.2ef9080611c4539f02389c5d92af0bf626925a46.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "stilettok",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_an_tiger_orange_light_large.dd59dfda5a30c3e7b0dbe256831ec91c4405bc34.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "stilettok",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_am_doppler_phase1_light_large.59120d4fe9c1a2d2c2c83466198255d01bac6431.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "stilettok",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_aq_damascus_prisma_light_large.d7378dcf37ca47334e789fed3691b11c9571a3a3.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "stilettok",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_so_purple_light_large.2a718be5434a5ff1b2b1a2d271ae5cc30030d7ef.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "stilettok",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_stiletto_aq_steel_knife_light_large.f714d7f3d6c1e0381dbfcd8f221f7edbe8bd2f28.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "talonk",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_am_marble_fade_widow_light_large.122c3dd61683bf749d2e7d4b759d3409a3293822.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "talonk",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_am_doppler_phase1_widow_light_large.3595e4a1fd5df25a46d17dc4d3a69ba93df2a77a.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "talonk",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_an_tiger_orange_light_large.f9c5d573a1f20baf81898db77dfa6fd0537bb92f.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "talonk",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_so_purple_light_large.8338e07caf8f6c129754b605709612b5e3d1679d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "talonk",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_aq_damascus_widow_light_large.57ae6cb141a599ac36b47b9d4ff20f9f880a520f.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "talonk",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_widowmaker_aq_steel_knife_light_large.09f8e1ffebb9345ae6293dc1734e855a1e83c0c5.png",
    "wearMin": 0.4,
    "wearMax": 1
  },
  {
    "weapon": "ursusk",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_am_marble_fade_light_large.9bb670990070eff6f22a1a358459fb69cece0b5b.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ursusk",
    "skin": "Doppler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_am_doppler_phase1_light_large.e1f226d384ff63baac83dfe015fc5244a8b58986.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ursusk",
    "skin": "Tiger Tooth",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_an_tiger_orange_light_large.34be676a93f4d6f275e0690d64a3c601e1612dc9.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ursusk",
    "skin": "Ultraviolet",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_so_purple_light_large.88bd0def19100cd3e17f1d568206d2816614daa5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ursusk",
    "skin": "Damascus Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_aq_damascus_prisma_light_large.3d36b7616e102e1648b9b18ed186dd9a4f2f49ed.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ursusk",
    "skin": "Rust Coat",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_ursus_aq_steel_knife_light_large.cbc964450e298df0282216027edba827c45c0964.png",
    "wearMin": 0.4,
    "wearMax": 1
  }
],
// Generation 4 knives
knifeClassicOld:  [
  {
    "weapon": "classick",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_aa_fade_light_large.f39aed45b6599c0e5850cb948b81f45268febc83.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "classick",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_am_zebra_light_large.ae26f920f022f2dc8d700bba2dee4e7003552a4b.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "classick",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_css.0b33071c28c02e6f19e363dc9a838566c6557389.png"
  },
  {
    "weapon": "classick",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_hy_webs_light_large.9f0ea28d7a29034eaade735f0bfd5d8bc5600e99.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "classick",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_aq_oiled_light_large.20001c41e9bf3e1c1da9938c9f72a935241755c8.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "classick",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_sp_nightstripe_light_large.464a6d76bcc6c3648aa079ca346ee3076783b55b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "classick",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_aq_blued_light_large.917fe4fc323042ac09109c9185742ba228539985.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "classick",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_sp_dapple_light_large.4ff8fd82fa685fea7a2d243eecf8b7a230c46ee9.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "classick",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_aq_forced_light_large.7f67fec75394666e6df6aa8a31aa492d4540fc94.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "classick",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_hy_ddpat_light_large.66740db6797133d2d2d7240b3ce70f530e9a0a81.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "classick",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_sp_mesh_tan_light_large.1c0bd9203662ac57a740117d1c22fead6e7863df.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "classick",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_hy_forest_boreal_light_large.6139ce1d3498601b6114389dcdb2835157ef618b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "classick",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_css_sp_tape_urban_light_large.441ee120340e931006889e4848c673200d44b476.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
knife4Old:  [
  {
    "weapon": "nomadk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_aa_fade_light_large.f24efcbcc28c8f3ddf18e1d777cde462b5c0c739.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "nomadk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_am_zebra_light_large.c372a0fb3df0db00a6d11595ff420c0142d925b2.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "nomadk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_outdoor.fdb3ce5ceef1584781759ef5a7bd6f819bf12e9b.png"
  },
  {
    "weapon": "nomadk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_hy_webs_light_large.da204035f2b27faabebe138093669986beb50943.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nomadk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_aq_oiled_light_large.9add3a89dd0e03c85f525b6906c53df829bcc885.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "nomadk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_aq_blued_light_large.f862df3f6428b2263abc07e569466df251ddbd67.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "nomadk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_hy_ddpat_light_large.c8781e797feef7102162202f74bfd331935f22dc.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nomadk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_aq_forced_light_large.14a5428217d497aaaeecc8c126390b3d5ead5348.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "nomadk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_hy_forest_boreal_light_large.d153647065ed5830379413e9c00442378c8cc310.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nomadk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_sp_mesh_tan_light_large.7c3c80a31f6255847368dc38a96bcd8c17abca02.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nomadk",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_sp_nightstripe_light_large.3aad1683b3f6ffe1204f2aded7fa3be4f47d9c6e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nomadk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_sp_tape_urban_light_large.8712508941f9bfc792f84d0f474701452860f856.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "nomadk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_outdoor_sp_dapple_light_large.e587077d740da85df09c4cc459608841e7d2cafd.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "paracordk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_aa_fade_light_large.9a14f355546aa33302e185e4d5ff1f7d6aacb066.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "paracordk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_am_zebra_light_large.4fc56265a0e28111765e2128d18608f5119b17fc.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "paracordk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_aq_oiled_light_large.e8657de871b02a874d8dedf49c3a0d548572a2f0.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "paracordk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_hy_webs_light_large.c54ef1bb727c43bd0e8774a7578e168c9e59cd70.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "paracordk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_cord.073b5fa991a256ec2264b1c1c581401631eb51cb.png"
  },
  {
    "weapon": "paracordk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_aq_blued_light_large.fb64668e22b20cea7114e71d24dae38059cda8cf.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "paracordk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_aq_forced_light_large.7d06225b469031d5821bb57461416fe6ebdd05e9.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "paracordk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_hy_forest_boreal_light_large.0ce7ec5b40e8460bf8036d6e34eb5cface471e74.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "paracordk",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_sp_nightstripe_light_large.2055a32e9d197f0ad6606c1adc7e1d5d991e48d4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "paracordk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_sp_dapple_light_large.bcdaa305cdbafbb475aefc06f3bc215d87d980ae.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "paracordk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_hy_ddpat_light_large.1e22f371cb1b745fe26e8f414f4a8f0f73687e7f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "paracordk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_sp_tape_urban_light_large.24901673d8f1b4d1aa607aa1b6641b2c0f245cb2.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "paracordk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_cord_sp_mesh_tan_light_large.3d4a214457d2064db8d3c31bbf7c60177b6d7054.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "skeletonk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_am_zebra_light_large.77bd823d8fd0e21cb023e72df0b90aad2770854d.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "skeletonk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_hy_webs_light_large.26e2d641fa3eb5c6a90fc3bf39ff0a7f20367e56.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "skeletonk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_skeleton.1fc401a844008bcaa89f8381cbe7b550a051609d.png"
  },
  {
    "weapon": "skeletonk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_aq_blued_light_large.e306a716cec27d1640c9876d01b383374d86ef98.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "skeletonk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_aq_oiled_light_large.822bad0bf51e44a83631245c24ca5c2999df0948.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "skeletonk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_aq_forced_light_large.a752be1acf6b4445ff9a18e4b0d2b76bb7931b11.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "skeletonk",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_sp_nightstripe_light_large.ad615b6e8bff8a937fed22b0353cfecbcd6be72f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "skeletonk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_sp_tape_urban_light_large.be8cbee1fb2d09db34efbd706ae3abfa18eb576c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "skeletonk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_hy_ddpat_light_large.619cec010cb8826d284aae1058eabfbc3dde6600.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "skeletonk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_sp_dapple_light_large.6f270cc94041e24473960f9450ac1b05ef4bc91b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "skeletonk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_hy_forest_boreal_light_large.f702dc4abc53b6f3f884a78da88178d93b209db4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "skeletonk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_sp_mesh_tan_light_large.843c611b645fdce0b0d929594d6f1a204fd1fe9b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "skeletonk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_skeleton_aa_fade_light_large.0651775fa2d0551359ec96559f9833e28fa07917.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "survivalk",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_aa_fade_light_large.92876cf32de94fbd84b9ec16f405afa6858e61b5.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "survivalk",
    "skin": "Slaughter",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_am_zebra_light_large.9d7f3c4d11a4306e6e7802cc7efd3cfdd3e5a157.png",
    "wearMin": 0.01,
    "wearMax": 0.26
  },
  {
    "weapon": "survivalk",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_hy_webs_light_large.7261fc72cd4d29a022ff0007fb1979f677fcdda5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "survivalk",
    "skin": "★ (Vanilla)",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/weapons/base_weapons/weapon_knife_canis.ae03aed81864dc2ee1e1118bb973418f910098ac.png"
  },
  {
    "weapon": "survivalk",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_aq_oiled_light_large.2fa47bb5d071d4c97891a46c1d8a809d5ed1df1a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "survivalk",
    "skin": "Blue Steel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_aq_blued_light_large.5ee9cc49a41041b4222e7411b10da359377a6c55.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "survivalk",
    "skin": "Stained",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_aq_forced_light_large.5b36558b1d1aa73d1b5d932df92e27e9b4d7393d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "survivalk",
    "skin": "Night Stripe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_sp_nightstripe_light_large.e59d46c4c54c4982cf2032f740d9bccd2295c902.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "survivalk",
    "skin": "Safari Mesh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_sp_mesh_tan_light_large.ca71e80ebdca2d69c30123a0ee8eea716f80ef30.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "survivalk",
    "skin": "Boreal Forest",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_hy_forest_boreal_light_large.c6d09e409e9574e0aa69b6164feb7387ed7f3e55.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "survivalk",
    "skin": "Urban Masked",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_sp_tape_urban_light_large.a7a1b8f1c13416e109b5e9a6ba2c094af0df4317.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "survivalk",
    "skin": "Forest DDPAT",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_hy_ddpat_light_large.5fd606c2c6356afbebe401fef45799a782b30865.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "survivalk",
    "skin": "Scorched",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_knife_canis_sp_dapple_light_large.6bcdee364f278146bb1740932a59da614d0db274.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
// Gloves
glove2:  [
  {
    "weapon": "driverg",
    "skin": "King Snake",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_snakeskin_white_light_large.f6a54c7a3cf91ecbe0a712bb2126bfe77f86825e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "driverg",
    "skin": "Imperial Plaid",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_plaid_purple_light_large.0315b76daffb839e03a9e543dc0d4a3abe716922.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "driverg",
    "skin": "Overtake",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_stitched_black_orange_light_large.6cd14c51b9f239f57cf20603a13a8f9b7efb42ed.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "driverg",
    "skin": "Racing Green",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_stitched_green_grey_light_large.808fca3933fe16b20eb0cc26bd78fbbc47988dad.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "handw",
    "skin": "Cobalt Skulls",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_fabric_blue_skulls_light_large.51e28cc44ce70fd4ed719326a06f4cb0ef3808b5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "handw",
    "skin": "Overprint",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_fabric_geometric_blue_light_large.a353dde9306d9be1eafd84331b0bf120142b692f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "handw",
    "skin": "Arboreal",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_fabric_green_camo_light_large.2b510ab7fcfd5837f239f378b03216cc3bcf6e3c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "handw",
    "skin": "Duct Tape",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_ducttape_light_large.b18975cd28aee7645dbfd86009884358664e1aa5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "hydrag",
    "skin": "Case Hardened",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_hydra_gloves_bloodhound_hydra_case_hardened_light_large.611be49c3a2f37057a7740c8ad74cc818f688b3d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "hydrag",
    "skin": "Emerald",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_hydra_gloves_bloodhound_hydra_black_green_light_large.16bbb88e6be97ca92f5227a59d3f76560fccaf80.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "hydrag",
    "skin": "Rattler",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_hydra_gloves_bloodhound_hydra_snakeskin_brass_light_large.953e703a64d078c26bf8075c3b5a8525d91ce74e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "hydrag",
    "skin": "Mangrove",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_hydra_gloves_bloodhound_hydra_green_leather_mesh_brass_light_large.d960afafd988b76ad2ffc2e77e306a35e01f02ca.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "motog",
    "skin": "POW!",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_choco_boom_light_large.37abd7be1296fa17815f7b41a7d063e45b343cab.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "motog",
    "skin": "Polygon",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_trigrid_blue_light_large.5e8f353a222f45406ab0b60e0d68d669953f0e20.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "motog",
    "skin": "Transport",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_yellow_camo_light_large.7ed261be20f42153198256faa761bb0b820b2ef9.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "motog",
    "skin": "Turtle",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_basic_green_orange_light_large.3e58353974e92bb56f218bb93b4fa77b0639e498.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "specialg",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_fade_light_large.93080c3004ae36aa520d87fd0ceb04463298453c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "specialg",
    "skin": "Crimson Web",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_webs_red_light_large.f98d18b4fe7ad7e5dec69a61f2c82631a44e4c52.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "specialg",
    "skin": "Mogul",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_winterhex_light_large.2b5d5ec0b5388beef874b932a8f9c053360ae7dc.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "specialg",
    "skin": "Buckshot",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_forest_brown_light_large.9006b6eb926c084698116f2c534c963a2f8fccec.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sportg",
    "skin": "Amphibious",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_poison_frog_blue_white_light_large.cc4489cbac59f82ddb18c9a331a98bfd40627ee2.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sportg",
    "skin": "Vice",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_blue_pink_light_large.0da7dccfde04268a4289ad4b6c00a23a124a624e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sportg",
    "skin": "Omega",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_black_webbing_yellow_light_large.5d7b101eb7875c41cff58e0fa0c08a49f7303b50.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sportg",
    "skin": "Bronze Morph",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_poison_frog_red_green_light_large.12893b922fb8f2dc1d1eecf01bf628642874e937.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
glove3:  [
  {
    "weapon": "fangg",
    "skin": "Yellow-banded",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_poison_frog_black_yellow_light_large.288cab790af6a199b856678af930756e2fbb27ed.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "fangg",
    "skin": "Unhinged",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_snakeskin_black_light_large.66371a4c81360f765a00c334492edeb05f2bbb79.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "fangg",
    "skin": "Jade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_metalic_green_light_large.80a800c0b681384b0227d4125cd21c4e4df0469c.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "fangg",
    "skin": "Needle Point",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/studded_brokenfang_gloves_operation10_floral_light_large.8738e4c5cf48aa1636acb8bd9888d4b12fe09df1.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "driverg",
    "skin": "Snow Leopard",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_jaguar_white_light_large.232a00b09f3840949dd1390ccf64115c64577bc7.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "driverg",
    "skin": "Black Tie",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_stitched_black_white_light_large.40e9a843153a7b14540f53e1c34322ab9a4a08b5.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "driverg",
    "skin": "Queen Jaguar",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_jaguar_yellow_light_large.f706695fc1cc89762777696d24cd2e22f50582aa.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "driverg",
    "skin": "Rezan the Red",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/slick_gloves_slick_rezan_light_large.642934831085e8715a7e8072614f71f9fc0f205e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "handw",
    "skin": "CAUTION!",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_caution_light_large.6a56c7aca789dc705530e1720672ee59efd11c61.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "handw",
    "skin": "Constrictor",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_snakeskin_orange_light_large.d22b23b2d86c4a419ce260b4186a2ef95ff0178a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "handw",
    "skin": "Desert Shamagh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_fabric_houndstooth_orange_light_large.08248935a70031a18cb246f3e3ac2bc0d8d66339.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "handw",
    "skin": "Giraffe",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/leather_handwraps_handwrap_leathery_fabric_giraffe_light_large.0efe682dbf18aadb7bece5975acf5033df42765a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "motog",
    "skin": "Smoke Out",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_smoke_light_large.3381b82109056ba823c0f09cb60152438d5e2b91.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "motog",
    "skin": "Finish Line",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_checker_flag_blue_green_light_large.d0a65fd2decfb2b5d4f8da4dfcd440771152d9fb.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "motog",
    "skin": "3rd Commando Company",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_commando_ksk_light_large.0cfdc31fc06c9a989be1f7e77320eee3d608a307.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "motog",
    "skin": "Blood Pressure",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/motorcycle_gloves_motorcycle_carbonfiber_red_light_large.39abf522353dcb56cfd4ef4b95123d510600bfe1.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "specialg",
    "skin": "Marble Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_marble_fade_light_large.37eb14336eedfe6e346c46134d18ea87eea1bd0f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "specialg",
    "skin": "Field Agent",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_fbi_light_large.1e314531001e6f78b6c3bf167a678b4aafc8d4c7.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "specialg",
    "skin": "Tiger Strike",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_tiger_orange_light_large.7a97c601858dc5688aba6f3e1a769f1743d14bc8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "specialg",
    "skin": "Lt. Commander",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/specialist_gloves_specialist_ricksaw_camo_light_large.83c8da4fc79d723f693ca5c9a551847321d61fb4.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sportg",
    "skin": "Slingshot",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_slingshot_light_large.31d32b99c02474d3c39dff0999d53bdc1249586d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sportg",
    "skin": "Nocts",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_jaguar_light_large.211eda01f38938c1a6e851aa45550c94d2fcab93.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sportg",
    "skin": "Big Game",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_hunter_light_large.60a0a2143cfdf8bcd1e6198ecf04bed3ce082024.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "sportg",
    "skin": "Scarlet Shamagh",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/sporty_gloves_sporty_houndstooth_red_light_large.1e0753ba972edc22576bc39d52d890b6df45114a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
// #1 Knife Valve cases
caseWeapon1:  [
  {
    "weapon": "awp",
    "skin": "Lightning Strike",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_lightning_awp_light_large.3761894103ee0fec90af459928635933ba27e36d.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ak47",
    "skin": "Case Hardened",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_aq_oiled_light_large.92c8d125e4e54758d37e946496030e9a18833b58.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "deagle",
    "skin": "Hypnotic",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aa_vertigo_light_large.85a16e4bfb8b1cc6393ca5d0c6d3a1e6e6023323.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "glock18",
    "skin": "Dragon Tattoo",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_dragon_glock_light_large.e42a72a19a2239c992573b88179897af37c7f849.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "usps",
    "skin": "Dark Water",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_am_zebra_dark_light_large.add709b2eb683853f9508ddf9c22503d7efb9925.png",
    "wearMin": 0.1,
    "wearMax": 0.26
  },
  {
    "weapon": "m4a1s",
    "skin": "Dark Water",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_am_zebra_dark_light_large.f484368a478f5e02d1b9d5e2816354fe705503f3.png",
    "wearMin": 0.1,
    "wearMax": 0.26
  },
  {
    "weapon": "sg553",
    "skin": "Ultraviolet",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_so_purple_light_large.44483356b334466acb6e781057d8f96a73cb376f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "aug",
    "skin": "Wings",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_feathers_aug_light_large.e1419b52a3ddd4bed5328f438ea5dea07b0ba248.png",
    "wearMin": 0,
    "wearMax": 0.14
  },
  {
    "weapon": "mp7",
    "skin": "Skulls",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_hy_skulls_light_large.3e38912bdbea8a2b03b149e619f9f141e54facfd.png",
    "wearMin": 0.1,
    "wearMax": 0.26
  }
],
caseWeapon2:  [
  {
    "weapon": "ssg08",
    "skin": "Blood in the Water",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_shark_light_large.00812c20a896847013b0a2913a166f6ba220a258.png",
    "wearMin": 0.06,
    "wearMax": 0.2
  },
  {
    "weapon": "p90",
    "skin": "Cold Blooded",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_am_slither_p90_light_large.583a90c66858cf0cc20253d2f4a0be1168eadbca.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "usps",
    "skin": "Serum",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_am_electric_red_light_large.ef8005beba74458fabbe8f664e0b210b2ef3a007.png",
    "wearMin": 0,
    "wearMax": 0.25
  },
  {
    "weapon": "57",
    "skin": "Case Hardened",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_aq_oiled_light_large.fdaa095453965b2be93f8aa90ae469d926fac4e7.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp9",
    "skin": "Hypnotic",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_aa_vertigo_light_large.41a7195e0a6ba44c2fc64d64bee0635444b0c569.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "duals",
    "skin": "Hemoglobin",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_am_ossify_red_light_large.9da21d3dc7b64952d853818075f524a9e4c1dfd3.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "nova",
    "skin": "Graphite",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_am_crumple_light_large.e46bab0dc8f8fe10b83c18ed9f9d9945352781af.png",
    "wearMin": 0,
    "wearMax": 0.12
  },
  {
    "weapon": "scar20",
    "skin": "Crimson Web",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_webs_darker_light_large.8e06e878c22b82c6bb1045f26e1bbc1926faecf2.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m4a1s",
    "skin": "Blood Tiger",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_hy_redtiger_light_large.0b40a51b0020fa1781ddb7368e3b39c03263b2dd.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "tec9",
    "skin": "Blue Titanium",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_an_titanium30v_light_large.76078065235a996df8184b684159dfee7efcd530.png",
    "wearMin": 0,
    "wearMax": 0.04
  },
  {
    "weapon": "p250",
    "skin": "Hive",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_redhex_light_large.099092ccf56439b922b51569ce87f2f908abcc19.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "famas",
    "skin": "Hexane",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_hy_bluehex_light_large.fe87763b33ea8963cf87e9b8fd7b9bfc9014d747.png",
    "wearMin": 0,
    "wearMax": 0.4
  }
],
caseWeapon3:  [
  {
    "weapon": "cz75",
    "skin": "Victoria",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_aq_etched_cz75_light_large.5fa7e4f56600efeaceb99a948c6fa5dc3648a3b9.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "p250",
    "skin": "Undertow",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_p250_beaded_paint_light_large.2ddd1d4b6dd6fa2082001802a60acfa9daba722d.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "cz75",
    "skin": "The Fuschia Is Now",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_fuschia_light_large.9ca4218835426c791482a3d7cc3b00d00c958d40.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "deagle",
    "skin": "Heirloom",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_engraved_deagle_light_large.804a1a01a29bf80673b739f3eb220272a6838193.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "57",
    "skin": "Copper Galaxy",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_am_copper_flecks_light_large.d2af814b76763880470bc7039d5569eb74b26978.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "cz75",
    "skin": "Tread Plate",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_diamond_plate_light_large.ef425c82bae5d971bd5e1e9c54b9cd2f992e4e16.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "tec9",
    "skin": "Titanium Bit",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_am_fluted_tec9_light_large.bfb4506150a675b24d3178f457507db2903364d6.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "usps",
    "skin": "Stainless",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_aq_usp_stainless_light_large.3f6edb8ebd4138742504859e0d3e7c51a23c39db.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "glock18",
    "skin": "Blue Fissure",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_hy_craquelure_light_large.8e97eb17a01e73c47a8987685d740b344aeb2cb8.png",
    "wearMin": 0.06,
    "wearMax": 0.58
  },
  {
    "weapon": "cz75",
    "skin": "Crimson Web",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_hy_webs_light_large.2093b43aefa82ee6713c472384ea283fdd44f023.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "duals",
    "skin": "Panther",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_so_panther_light_large.019431b3fca18b027d07fe29d0ee7bf88df75576.png",
    "wearMin": 0,
    "wearMax": 0.58
  },
  {
    "weapon": "p2000",
    "skin": "Red FragCam",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_hy_poly_camo_light_large.e4c6576e012974ba60e6dbc70fe5cd1cacc30011.png",
    "wearMin": 0,
    "wearMax": 0.7
  }
],
caseBravo:  [
  {
    "weapon": "ak47",
    "skin": "Fire Serpent",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_fireserpent_ak47_bravo_light_large.9390e7fd091ea8a0434fd2143e0acf0d5d1bbc97.png",
    "wearMin": 0.06,
    "wearMax": 0.76
  },
  {
    "weapon": "deagle",
    "skin": "Golden Koi",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_scales_bravo_light_large.6cba46695e74a8bee932ea90cea24e146cbef5e7.png",
    "wearMin": 0,
    "wearMax": 0.12
  },
  {
    "weapon": "p90",
    "skin": "Emerald Dragon",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_dragon_p90_bravo_light_large.200ef513ae29ae7651ad3f31e68b5b186279572f.png",
    "wearMin": 0.06,
    "wearMax": 0.52
  },
  {
    "weapon": "p2000",
    "skin": "Ocean Foam",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_am_ossify_blue_p2000_bravo_light_large.91f225635f7e4a986b51e09bba106ca6a4bf7dbb.png",
    "wearMin": 0,
    "wearMax": 0.12
  },
  {
    "weapon": "awp",
    "skin": "Graphite",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_crumple_bravo_light_large.5f59de227d280f3c3b39fae7e49ac143338ca5b2.png",
    "wearMin": 0,
    "wearMax": 0.12
  },
  {
    "weapon": "m4a4",
    "skin": "Zirka",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_sp_star_bravo_light_large.d4a56abe885a1a03ea173a6aaeb4f10bcec6a0c2.png",
    "wearMin": 0.06,
    "wearMax": 0.42
  },
  {
    "weapon": "usps",
    "skin": "Overgrowth",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_hy_siege_bravo_light_large.517b89e78bfe8bad7ca1aab7edf1d02a56b2da26.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Graven",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aq_etched_mac10_bravo_light_large.ec4cf2f7748ac5318292630c8c7e3c2d016723e3.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m4a1s",
    "skin": "Bright Water",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_hy_ocean_bravo_light_large.7a942449926153575269af174733edc7bed5faeb.png",
    "wearMin": 0.1,
    "wearMax": 0.22
  },
  {
    "weapon": "nova",
    "skin": "Tempest",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_hy_seaside_bravo_light_large.bad13bb67e67ee02b782a574376df5e7e4ff766d.png",
    "wearMin": 0.06,
    "wearMax": 0.22
  },
  {
    "weapon": "sg553",
    "skin": "Wave Spray",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_sp_spray_waves_bravo_light_large.5d4e0e3977bf9f1fa8dd1576b5576b429546f98d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "galil",
    "skin": "Shattered",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_crumple_bravo_light_large.fcf25827c0ef88bac7e5b0567ecd5a7dbee01791.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "g3sg1",
    "skin": "Demeter",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_hy_bluepolygon_bravo_light_large.6638623a4979512bb048fa22f9ec06a5c1172c7e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "ump45",
    "skin": "Bone Pile",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_sp_skull_diagram_bravo_light_large.f3bf563f6e0274f55377e4fe0422905586a3d19b.png",
    "wearMin": 0.06,
    "wearMax": 0.34
  },
  {
    "weapon": "duals",
    "skin": "Black Limba",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_season_elites_bravo_light_large.03b5f4afcbffb80f73ce009da240f4aa1455c15f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  }
],
caseEsports2013:  [
  {
    "weapon": "p90",
    "skin": "Death by Kitty",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_catskulls_p90_light_large.0ff2c5c53a691e28de02cd7b40e395d53d8c6826.png",
    "wearMin": 0.08,
    "wearMax": 0.32
  },
  {
    "weapon": "awp",
    "skin": "BOOM",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_blam_simple_light_large.ed114947481e0366b2cde092a8ddac4d7250775b.png",
    "wearMin": 0.06,
    "wearMax": 0.28
  },
  {
    "weapon": "ak47",
    "skin": "Red Laminate",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_light_large.199620e808579639264cf753d0650721b4bc1f37.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "galil",
    "skin": "Orange DDPAT",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_ddpat_orange_light_large.8499a023e61f6d3f7d03012521422bedaedd6c2b.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Splash",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_sp_splash_p250_light_large.9270d8d14c39aef83407ea50e51f0eb89c17263d.png",
    "wearMin": 0.06,
    "wearMax": 0.18
  },
  {
    "weapon": "sawedoff",
    "skin": "Orange DDPAT",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_hy_ddpat_orange_light_large.04fe163870ad65e17d8e4dd9403180ed3c5a218d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "m4a4",
    "skin": "Faded Zebra",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_sp_zebracam_bw_light_large.de08ef2a6d7524e682118cef5d12124c5156dfa8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mag7",
    "skin": "Memento",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_hy_icosahedron_light_large.f7ea8cca0b48a0463d0877af9c94e7f54d0f1d79.png",
    "wearMin": 0.02,
    "wearMax": 0.18
  },
  {
    "weapon": "famas",
    "skin": "Doomkitty",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_hy_doomkitty_light_large.c9dd7b8fb1a44d5691684aae406d360433550468.png",
    "wearMin": 0.08,
    "wearMax": 0.22
  }
],
caseEsports2013Winter:  [
  {
    "weapon": "m4a4",
    "skin": "X-Ray",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_xray_m4_light_large.e929bb3998df4902c2bd6f6fbb775cec071558ba.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "deagle",
    "skin": "Cobalt Disruption",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_ddpatdense_peacock_light_large.a486db3160bcdcf6bc5a1d8179c450b02f620151.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "awp",
    "skin": "Electric Hive",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_hy_hive_light_large.2189958e2afa2c69cfcdd807124c279a0e645625.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "famas",
    "skin": "Afterimage",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_broken_path_famas_light_large.5d45539735d838ffefd26467a8c767b71807c785.png",
    "wearMin": 0.02,
    "wearMax": 0.4
  },
  {
    "weapon": "ak47",
    "skin": "Blue Laminate",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_hy_ak47lam_blue_light_large.9f8ec5103efa5b7a0b3919a13b4de78e1bd612a0.png",
    "wearMin": 0.02,
    "wearMax": 0.4
  },
  {
    "weapon": "p90",
    "skin": "Blind Spot",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_modspots_light_large.a702b8feaf0e2568e60efb2ab722819b0521ea4b.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "galil",
    "skin": "Blue Titanium",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_an_titanium30v_light_large.4264e8ec1cedb3bce31a89c934c630bd56d480c1.png",
    "wearMin": 0,
    "wearMax": 0.04
  },
  {
    "weapon": "p250",
    "skin": "Steel Disruption",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_ddpatdense_silver_light_large.36220b384099ed61c2b9ba64af899b892e4a4c58.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "ppbizon",
    "skin": "Water Sigil",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_water_crest_light_large.c4d0aad9cb87870f84f3709ff3b8ecc9fe489d89.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "57",
    "skin": "Nightshade",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_hy_flowers_light_large.4f94edf6ac032c15fedafa6ba1f2425a4ca8bded.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "g3sg1",
    "skin": "Azure Zebra",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_sp_zebracam_blue_light_large.42199f9c4c0bd1ff9f569d6e7348c5cedf4630f5.png",
    "wearMin": 0,
    "wearMax": 0.28
  },
  {
    "weapon": "nova",
    "skin": "Ghost Camo",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_sp_camo_wood_blue_light_large.d63e06a38ef396a945defd7c1ad9da9ba79fe60d.png",
    "wearMin": 0,
    "wearMax": 0.4
  }
],
caseEsports2014Summer:  [
  {
    "weapon": "m4a4",
    "skin": "Bullet Rain",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_bullet_rain_m4a1_light_large.4b359387b8abcdb0ae92134ba0f2106c405d9222.png",
    "wearMin": 0.02,
    "wearMax": 0.46
  },
  {
    "weapon": "ak47",
    "skin": "Jaguar",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_panther_ak47_light_large.6b7c82083b5fbb71631ad7961ac1543d1fc2a5cd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "nova",
    "skin": "Bloomstick",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_spring_nova_light_large.0be95a01dd54b579186464d0533c5195ffb14a8f.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "awp",
    "skin": "Corticera",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_favela_awp_light_large.4329c047ea1899f3846a1a81539ba2a27665a54e.png",
    "wearMin": 0.06,
    "wearMax": 0.3
  },
  {
    "weapon": "aug",
    "skin": "Bengal Tiger",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_tiger_light_large.d2fe957d3903dc5779403ed1c95947e18fa7e6fd.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "p2000",
    "skin": "Corticera",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_favela_p2000_light_large.cc40db4d5048c7ddcfb52642d954e91400e59290.png",
    "wearMin": 0.06,
    "wearMax": 0.3
  },
  {
    "weapon": "deagle",
    "skin": "Crimson Web",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_hy_webs_darker_light_large.7b9cb19bac52ebe7c49e3abdfb0c400ea252fef8.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Ocean Foam",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_am_ossify_blue_light_large.b2c077afc23ddb48381629155713816dbf09fb84.png",
    "wearMin": 0,
    "wearMax": 0.08
  },
  {
    "weapon": "ppbizon",
    "skin": "Blue Streak",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_splatter_light_large.7a7417d95485ceb2148bdd3d228219307082ea8a.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "glock18",
    "skin": "Steel Disruption",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_am_ddpatdense_silver_light_large.4d83c0a0b958bb15f694c7047996ece59f4be05a.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "p90",
    "skin": "Virus",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_hy_zombie_light_large.7f66b30e6902ae7722b7951fd7446ae7e9b3880e.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Ultraviolet",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_so_purple_light_large.c4e2252fe50aab42b6dcd871f33786f68e6261ea.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "usps",
    "skin": "Blood Tiger",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_hy_redtiger_light_large.5d778f6030de49296f349081781d84ef215a9b90.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "negev",
    "skin": "Bratatat",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_bratatat_negev_light_large.b7589c335fb7066d53b1897e000f031d316641e6.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "cz75",
    "skin": "Hexane",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_hy_bluehex_light_large.032e4b0999830a45d7439d07faef66b8299a105f.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "ssg08",
    "skin": "Dark Water",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_am_zebra_dark_light_large.5636371696eee32d9a3e588ff3b42f6b33776d99.png",
    "wearMin": 0.1,
    "wearMax": 0.26
  },
  {
    "weapon": "xm1014",
    "skin": "Red Python",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_hy_snakeskin_red_light_large.d019a25e10fe53f2edf2958fb322c59621abc4de.png",
    "wearMin": 0.08,
    "wearMax": 0.5
  }
],
// #1 Knife community cases
caseWinterOffensive:  [
  {
    "weapon": "m4a4",
    "skin": "Asiimov",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4_asimov_light_large.af03179f3d43ff55b0c3d114c537eac77abdb6cf.png",
    "wearMin": 0.18,
    "wearMax": 1
  },
  {
    "weapon": "sawedoff",
    "skin": "The Kraken",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_octopump_light_large.761df5911efc6a96061c7b34e41a2ff6ec61e58b.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "awp",
    "skin": "Redline",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_cobra_light_large.cf20ce6ac1151b4a30d8a84081ec4373cbfad4a4.png",
    "wearMin": 0.1,
    "wearMax": 0.4
  },
  {
    "weapon": "m4a1s",
    "skin": "Guardian",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1-s_elegant_light_large.1acbb0060648091ac532de68cfd720b7ad980564.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p250",
    "skin": "Mehndi",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_refined_light_large.9da38bc561b6576555b1700e9e10ddbc52994c67.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Marina",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_hy_marina_sunrise_light_large.bcdf31f5af4a5b9bef2bb0d5336715a3a0407b92.png",
    "wearMin": 0.05,
    "wearMax": 0.5
  },
  {
    "weapon": "mp9",
    "skin": "Rose Iron",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_thorny_rose_mp9_light_large.a187f13404eba96de622f4c94e85078fb18d8d7c.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "famas",
    "skin": "Pulse",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_pulse_light_large.fad5dfcd7b0ccfe655c7c3903d091140904959ec.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "nova",
    "skin": "Rising Skull",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_skull_nova_light_large.558d42424adda8cc3383b05d5388f75837b07efa.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ppbizon",
    "skin": "Cobalt Halftone",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_am_turqoise_halftone_light_large.e34dc4bab2f1da66b04bd2d3cadb51339ce81f4d.png",
    "wearMin": 0.05,
    "wearMax": 0.45
  },
  {
    "weapon": "galil",
    "skin": "Sandstorm",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_sandstorm_light_large.008937727e75bf840d2b511d3d8493a12b5ed2ac.png",
    "wearMin": 0.1,
    "wearMax": 0.6
  },
  {
    "weapon": "57",
    "skin": "Kami",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_hy_kami_light_large.ce4939fe41b30c6143f487879a57e4f5f227e811.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "m249",
    "skin": "Magma",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_aq_obsidian_light_large.c8a38c9354c2f4531f0802eaa49caa9878bbf9ed.png",
    "wearMin": 0,
    "wearMax": 0.7
  }
],
casePhoenix:  [
  {
    "weapon": "awp",
    "skin": "Asiimov",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_asimov_light_large.32d9045f8a2bcd13ca18390cc9fd82026e7195ab.png",
    "wearMin": 0.18,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Chameleon",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_chameleonaire_light_large.ad1d2f62d1481931d8e23e0ab0fbd4e7a61135f7.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ak47",
    "skin": "Redline",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_cobra_light_large.7494bfdf4855fd4e6a2dbd983ed0a243c80ef830.png",
    "wearMin": 0.1,
    "wearMax": 0.7
  },
  {
    "weapon": "nova",
    "skin": "Antique",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_antique_light_large.3391e20bf69d1a630ab0551fd0c2fa196d028e44.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "p90",
    "skin": "Trigon",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_trigon_light_large.9f93f859fe1d03dfced62e52c4cab39ae2f8a9f3.png",
    "wearMin": 0.08,
    "wearMax": 0.75
  },
  {
    "weapon": "usps",
    "skin": "Guardian",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_elegant_light_large.416f607cc5faeb52be0f22e1b98450391f452ac2.png",
    "wearMin": 0,
    "wearMax": 0.38
  },
  {
    "weapon": "mac10",
    "skin": "Heat",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_redhot_light_large.d5e1e0b433e3340266635970ca45cbbf810216f2.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "sg553",
    "skin": "Pulse",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_pulse_light_large.d564900d05df0ee1da737cde6144eb55fa36684f.png",
    "wearMin": 0.1,
    "wearMax": 0.6
  },
  {
    "weapon": "famas",
    "skin": "Sergeant",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_an_famas_sgt_light_large.5a9241d41a3c35a3fbb20aebcd22253a6a85f72f.png",
    "wearMin": 0.1,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Sandstorm",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_sandstorm_light_large.e38b0daacb3aa5d8f692a5ee05ad4bc0885808cd.png",
    "wearMin": 0.1,
    "wearMax": 0.7
  },
  {
    "weapon": "negev",
    "skin": "Terrain",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_sp_negev_turq_terrain_light_large.9c6c678b0e6bc949c0688f3e1cf39ca73e0a44ae.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "ump45",
    "skin": "Corporal",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_corporal_light_large.ae233b4fabc9ff5fef6d25a87175ce5ad8f2ee6e.png",
    "wearMin": 0.05,
    "wearMax": 0.75
  },
  {
    "weapon": "mag7",
    "skin": "Heaven Guard",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_heaven_light_large.ea002eaa1f984e278f59a934ca9016f038d06120.png",
    "wearMin": 0,
    "wearMax": 0.4
  }
],
caseVanguard:  [
  {
    "weapon": "ak47",
    "skin": "Wasteland Rebel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_tribute_ak47_light_large.f0ccfeea8a432a82cf4fb7f0411a724dbb43459a.png",
    "wearMin": 0.05,
    "wearMax": 0.7
  },
  {
    "weapon": "p2000",
    "skin": "Fire Elemental",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_fire_elemental_light_large.1e57d4d9f1c51e613c1923377aa55fab4b0ab1bc.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "xm1014",
    "skin": "Tranquility",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_caritas_light_large.060e6378f5b5ab6fc53a2db451f3d68b8033f304.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p250",
    "skin": "Cartel",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aq_p250_cartel_light_large.d63ea117934ac8f9a40afe027fa4a1438dbb1777.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "scar20",
    "skin": "Cardiac",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_cu_scar20_intervention_light_large.96d9a26cca617207208a836d424d676bcb2ce3b9.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a1s",
    "skin": "Basilisk",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_aq_m4a1s_basilisk_light_large.18370d6557500376e137c7f6b07c7ed46c9dccf2.png",
    "wearMin": 0,
    "wearMax": 0.68
  },
  {
    "weapon": "m4a4",
    "skin": "Griffin",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_griffin_light_large.255bd83fd343ea8e8d84a1d5c94959d0b26cafae.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "glock18",
    "skin": "Grinder",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aq_glock_coiled_light_large.d4dcbf0d27479b95a4ad43c36f3b3f3dc87bbd84.png",
    "wearMin": 0.02,
    "wearMax": 0.25
  },
  {
    "weapon": "sawedoff",
    "skin": "Highwayman",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawedoff_blackgold_light_large.4a8c3a27c780c2a5ec3e4b6686498dce439d5a73.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mag7",
    "skin": "Firestarter",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_sp_mag7_firebitten_light_large.640af2edb52a7f170620e175ddaa5f5cf763325b.png",
    "wearMin": 0.06,
    "wearMax": 0.49
  },
  {
    "weapon": "ump45",
    "skin": "Delusion",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_sp_ump45_d-visions_light_large.33ae7e9e8bf24ee97f4f3d3ee113e51782a756fa.png",
    "wearMin": 0.06,
    "wearMax": 0.35
  },
  {
    "weapon": "57",
    "skin": "Urban Hazard",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_urban_hazard_light_large.456966d23faf1034c51b8130b7a70294af087026.png",
    "wearMin": 0,
    "wearMax": 0.25
  },
  {
    "weapon": "mp9",
    "skin": "Dart",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_chevron_light_large.698ab583537e3ed4b7661d3fcf75be62f0cdfab9.png",
    "wearMin": 0,
    "wearMax": 0.46
  },
  {
    "weapon": "g3sg1",
    "skin": "Murky",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_am_g3sg1_murky_light_large.bc4e8d0e70d2952576d5c9653da71f21bc02b810.png",
    "wearMin": 0,
    "wearMax": 0.25
  }
],
caseRevolver:  [
  {
    "weapon": "m4a4",
    "skin": "Royal Paladin",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_royal_squire_light_large.f802ec3cf9c1c6837d841384f6d112367340880b.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "r8",
    "skin": "Fade",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_aa_fade_revolver_light_large.af77aee9f82936e7510b89e7f0c1bbf6bfaaff45.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "ak47",
    "skin": "Point Disarray",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_point_disarray_light_large.ba0f6ccdcb917aa2bde2ef0312c57d763a61d341.png",
    "wearMin": 0,
    "wearMax": 0.67
  },
  {
    "weapon": "g3sg1",
    "skin": "The Executioner",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_g3sg1_executioner_light_large.36071be17a266f28d8631b0fd73a9be6767ce399.png",
    "wearMin": 0.14,
    "wearMax": 0.85
  },
  {
    "weapon": "p90",
    "skin": "Shapewood",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_shapewood_light_large.e7744840c89b1b83be82d2f64beb5a6719c47bd3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "negev",
    "skin": "Power Loader",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_impact_light_large.3315f6272c9bb790f96731643232008b4b8c7296.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Avalanche",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_avalanche_light_large.eb6726a24084bf5f3c8c8c70cd8ea37425a708e3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ppbizon",
    "skin": "Fuel Rod",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_noxious_light_large.dc3af57fa024448b24e4ddb8838a0a339cee46ce.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "57",
    "skin": "Retrobution",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_retrobution_light_large.7ef4b20b8c9aed4d6461861c9d93b81630f6ac71.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "sg553",
    "skin": "Tiger Moth",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_tiger_moth_light_large.18de0e5e029741a67330038e646fab1596fcfe88.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "xm1014",
    "skin": "Teclu Burner",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_hot_rod_light_large.f664b036e9b4ec638574f17a9b7ea0905e8c57e0.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "r8",
    "skin": "Crimson Web",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_hy_webs_light_large.2a0bbba44388502060a910b5a18f5b64b5be0b3d.png",
    "wearMin": 0.06,
    "wearMax": 0.8
  },
  {
    "weapon": "deagle",
    "skin": "Corinthian",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_deagle_corinthian_light_large.1a694892a1953a131775451d0542508b4b3d9e77.png",
    "wearMin": 0,
    "wearMax": 0.44
  },
  {
    "weapon": "aug",
    "skin": "Ricochet",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_am_aug_jumble_light_large.d86901a42f239ddc39cd645d2a17281881fe37d5.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "p2000",
    "skin": "Imperial",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_am_p2000_imperial_red_light_large.c47e207307725ed1f9e8cf6d1478dbfd3523c7a7.png",
    "wearMin": 0,
    "wearMax": 0.2
  },
  {
    "weapon": "sawedoff",
    "skin": "Yorick",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_gs_sawedoff_necromancer_light_large.8cead257afdfaf5b852a61d2358aa3fb84def860.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "scar20",
    "skin": "Outbreak",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_scar20_jungler_light_large.4f6402fac5ca041aae7db17b214e5cfd55149c44.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
// #1 Knife - Chroma cases
caseChroma:  [
  {
    "weapon": "galil",
    "skin": "Chatterbox",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_abrasion_light_large.8398e4836a0c26add3514a6af2262704d85fec07.png",
    "wearMin": 0.35,
    "wearMax": 0.85
  },
  {
    "weapon": "awp",
    "skin": "Man-o'-war",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_awp_glory_light_large.348eae0f5d4da8671886826648dd4197a9829090.png",
    "wearMin": 0.1,
    "wearMax": 0.2
  },
  {
    "weapon": "m4a4",
    "skin": "Dragon King",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_ancestral_light_large.cbd9732689f42b7aec91bdb9166b1ee414974cb7.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "ak47",
    "skin": "Cartel",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_aq_ak47_cartel_light_large.2e7be9f4c7bda304f2a7c374260d95affca93f0b.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "p250",
    "skin": "Muertos",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_mandala_light_large.0acb51464cd72643c6a1fefaf8736288eb5d02f7.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "deagle",
    "skin": "Naga",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_deagle_naga_light_large.b410ad835b1894a448676ae0590586298af2cb33.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Malachite",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_malachite_light_large.65b0eff12e655fb94ec9de545348178f1a5d60e0.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "duals",
    "skin": "Urban Shock",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_elites_urbanstorm_light_large.d33c9dd65434d8b9f4e7b5092fcc2e07a874e625.png",
    "wearMin": 0,
    "wearMax": 0.47
  },
  {
    "weapon": "sawedoff",
    "skin": "Serenity",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_deva_light_large.9ffde04f2f082dce492b2fa6e250f69f538a50b5.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "glock18",
    "skin": "Catacombs",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_deathtoll_light_large.cfcc6a17037a33bbb524ca1856c07cf76dda449d.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp9",
    "skin": "Deadly Poison",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_deadly_poison_light_large.0776976e709ec7b503dd7e47b8c962338615b5da.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m249",
    "skin": "System Lock",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_sektor_light_large.c957e70c656024b2c062f7af2031a76cb3c83f1c.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "xm1014",
    "skin": "Quicksilver",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_sigla_light_large.71c180cd3b8bdea7d0b119ab2b9d54792c51b3aa.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "scar20",
    "skin": "Grotto",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_aq_scar20_leak_light_large.06b9231638ba347e91c671ecf2c1364754794893.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
caseChroma2:  [
  {
    "weapon": "m4a1s",
    "skin": "Hyper Beast",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1_hyper_beast_light_large.31850937661935a062d5f6faf5a1f02fdb90b861.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Neon Rider",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_neonrider_light_large.4ba82cf2ba2d9fdc694d707b563421bbcc20b174.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "galil",
    "skin": "Eco",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_eco_light_large.7f64e2d77423b3c4263a74caeda18383c2e487d5.png",
    "wearMin": 0.1,
    "wearMax": 0.85
  },
  {
    "weapon": "57",
    "skin": "Monkey Business",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_banana_light_large.2d78a6614cb329ada893c8d028eb5c2b485f26f0.png",
    "wearMin": 0.1,
    "wearMax": 0.9
  },
  {
    "weapon": "famas",
    "skin": "Djinn",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_aq_famas_jinn_light_large.a0e1b8e2a572c5e3d6472181d4a0d6ce7f51139f.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "awp",
    "skin": "Worm God",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_aq_awp_twine_light_large.f976c41b8f978d2b8d13734f14f6586982d859f1.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "mag7",
    "skin": "Heat",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_redhot_light_large.76087a836e8c98fd10765a4b56dca946ba5acb4d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "cz75",
    "skin": "Pole Position",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75_precision_light_large.a0d0ea9d92ff9c535cbdaa9c07a1a95a5181a82b.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ump45",
    "skin": "Grand Prix",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_am_ump_racer_light_large.6d935bf0d33ca90994b1dd9aec78a8938dcd94a2.png",
    "wearMin": 0.25,
    "wearMax": 0.35
  },
  {
    "weapon": "ak47",
    "skin": "Elite Build",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_mastery_light_large.4305c0ba4b02ce531fc08c275fa6a9d87da2cf7e.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "deagle",
    "skin": "Bronze Deco",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_am_bronze_sparkle_light_large.42dc1d2bae9e586f75d6425f94a195014891533b.png",
    "wearMin": 0,
    "wearMax": 0.46
  },
  {
    "weapon": "p250",
    "skin": "Valence",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aq_p250_contour_light_large.faf5b305c68d8ea23814163b0a69dafa7318b818.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Origami",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_origami_light_large.5f1b3cef6d518cda69daafddd9b2c240a29cf0cc.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "mp7",
    "skin": "Armor Core",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_aq_mp7_ultramodern_light_large.5351e1926e4a9599d149c4941a8603f4143ff999.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "negev",
    "skin": "Man-o'-war",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_am_negev_glory_light_large.11ebbe525e92bd0a56dd4d3a7795a31a01823ba7.png",
    "wearMin": 0.1,
    "wearMax": 0.2
  }
],
caseChroma3:  [
  {
    "weapon": "m4a1s",
    "skin": "Chantico's Fire",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_soultaker_light_large.4939d69bd691d421ca9c7d6558b46088c8ac5317.png",
    "wearMin": 0,
    "wearMax": 0.99
  },
  {
    "weapon": "ppbizon",
    "skin": "Judgement of Anubis",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_curse_light_large.c19cf584d3e28db4914d1559cd387999457944d8.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p250",
    "skin": "Asiimov",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_asiimov_light_large.7ccf465f7dc55d2d960465d404c10cbc8c442cee.png",
    "wearMin": 0.1,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Fleet Flock",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_swallows_light_large.29e48baa4086b20e4a5f714b5f8cc6350de7c758.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ump45",
    "skin": "Primal Saber",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_primalsaber_light_large.67bef91a43734d654516f65c4288711b257d2049.png",
    "wearMin": 0,
    "wearMax": 0.77
  },
  {
    "weapon": "ssg08",
    "skin": "Ghost Crusader",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_gs_ssg08_armacore_light_large.043342869c64e1a08107055a4e1b332ad9c763c0.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "xm1014",
    "skin": "Black Tie",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_spectrum_light_large.6318ee51c405fb5e8a40aedfc3d98d530f789a5b.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "tec9",
    "skin": "Re-Entry",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_am_tec9_redblast_light_large.0f8de75737cc35ac1d14cf74924838da4d7ab849.png",
    "wearMin": 0,
    "wearMax": 0.43
  },
  {
    "weapon": "galil",
    "skin": "Firefight",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_gs_galilar_incenerator_light_large.669901b842361b46108ced0a555f5575839d093e.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "cz75",
    "skin": "Red Astor",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75a_redastor_light_large.e00e688986c50877a103fe66d70fdf1fc13bbe8b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp9",
    "skin": "Bioleak",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_mp9_bioleak_light_large.d9b0d0e9fea2104871e0510bd704bfa03cdd6056.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "duals",
    "skin": "Ventilators",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dualberettas_ventilators_light_large.45cb1ffd25de1ed5b90ba104b1f8e0a8eb2eb255.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "p2000",
    "skin": "Oceanic",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_hy_p2000_oceani_light_large.8f64654c5964975c85201b1dbbdf7b8ffab768be.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "m249",
    "skin": "Spectre",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_spectre_light_large.b0a23c44e56390b4bbdc2c389911f6cc2b42da3d.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "g3sg1",
    "skin": "Orange Crash",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_sp_g3sg1_militiaorange_light_large.215d54d5c86185e61d65694899bf029f6e070cab.png",
    "wearMin": 0,
    "wearMax": 0.52
  },
  {
    "weapon": "sg553",
    "skin": "Atlas",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_atlas_light_large.536218f8160485fa927e19fa06fedae43d9c04e6.png",
    "wearMin": 0,
    "wearMax": 0.81
  },
  {
    "weapon": "sawedoff",
    "skin": "Fubar",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_gs_sawedoff_fubar_light_large.0673d87171fccc0fc98e77806da7259e283283ea.png",
    "wearMin": 0.4,
    "wearMax": 1
  }
],
// #1 Knife - Gamma cases
caseGamma:  [
  {
    "weapon": "m4a1s",
    "skin": "Mecha Industries",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_mecha_industries_light_large.2973cf5ca9d1592d6652bf14ac89bcd8593d4f0a.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "glock18",
    "skin": "Wasteland Rebel",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_wasteland_rebel_light_large.284899ab35e5a29c6edb64b2af194cee19a0ed89.png",
    "wearMin": 0,
    "wearMax": 0.54
  },
  {
    "weapon": "m4a4",
    "skin": "Desolate Space",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_desolate_space_light_large.1fcbd5e124ae7c54cf12e6f76c431e6671a73845.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p2000",
    "skin": "Imperial Dragon",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_gs_p2000_imperial_dragon_light_large.cc82bc6353a0e8ce963f6b0b600905d4dc37bf4a.png",
    "wearMin": 0,
    "wearMax": 0.63
  },
  {
    "weapon": "scar20",
    "skin": "Bloodsport",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar20_bloodsport_light_large.dd99feccb31d2ec296bcd620abd885e6fe50d44e.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "awp",
    "skin": "Phobos",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_phobos_light_large.fca961cc99c704f09c44e6e82378434ef0e22087.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "r8",
    "skin": "Reboot",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_cu_r8_cybersport_light_large.d5eb827f99a401915b8377eda7b81a0bc9cae4bf.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Aristocrat",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_aristocrat_light_large.4004dbb20c03d1a210ff9a98968ddb251bdfddc6.png",
    "wearMin": 0,
    "wearMax": 0.66
  },
  {
    "weapon": "p90",
    "skin": "Chopper",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_full_throttle_light_large.70ef68d70617eb318e2df05e09f780448a1baf0d.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "sawedoff",
    "skin": "Limelight",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawed_off_lime_light_large.87fbbe1597ea04a51b56f3b0f7c3fc6a5ff6553c.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "57",
    "skin": "Violent Daimyo",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_five_seven_daimyo_light_large.d394398cae1977546887145dcf6a4892d2ed29aa.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "tec9",
    "skin": "Ice Cap",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_am_tec_9_sea_salt_light_large.726f78fd872aa2ccfcab9a051b4b79c314d50a4e.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mac10",
    "skin": "Carnivore",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aq_mac_10_alien_camo_light_large.10568510ec37ec8515546e5ac03455391bb9ec2d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "Iron Clad",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_metal_panels_light_large.a104ce12e50fa24711708782e5d7b23e1bcb7d1b.png",
    "wearMin": 0.05,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Exo",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_aq_nova_sci_fi_light_large.9cf268816cad5bdbe33bd4d1ddce1eb81f905164.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "sg553",
    "skin": "Aerial",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_aerial_light_large.a123874095a96a92aaacd0f64a4fef54fa455e82.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ppbizon",
    "skin": "Harvester",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_gs_pp_bizon_harvester_light_large.654d26d43d7e4583a0ede5e0ea6bb697858698dc.png",
    "wearMin": 0,
    "wearMax": 1
  }
],
caseGamma2:  [
  {
    "weapon": "ak47",
    "skin": "Neon Revolution",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_anarchy_light_large.6e98f0c6fcb81aaeca03c56eed68962f50c9ef94.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "famas",
    "skin": "Roll Cage",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_rally_light_large.538baee44eb772de95029e4267ea9c41101bbc94.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Fuel Injector",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_supercharged_light_large.e3ebc20f10eae02790fe95703b6099acca1d1809.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Syd Mead",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_syd_mead_light_large.333597e0555639f5d77541c363a9bb38d95055f3.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mp9",
    "skin": "Airlock",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_narcis_light_large.c63eaf3fab8c65ec3ab22da8205cbe3c51366d7a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "deagle",
    "skin": "Directive",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_desert_eagle_constable_light_large.fb2f2673dd3997a21bff9129e0d2e294c03095e8.png",
    "wearMin": 0.06,
    "wearMax": 1
  },
  {
    "weapon": "glock18",
    "skin": "Weasel",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock18_weasel_light_large.e02e6e5196ebdee47c595799ff011dd645147505.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "sg553",
    "skin": "Triarch",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg556_triarch_light_large.3ea74bea530adda100d25911372ca313ea99453a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mag7",
    "skin": "Petroglyph",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_tribal_light_large.c226728af447f07808ea5954eb9a24528092d972.png",
    "wearMin": 0,
    "wearMax": 0.44
  },
  {
    "weapon": "scar20",
    "skin": "Powercore",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar20_powercore_light_large.74bcd65b1a4a52dd397ede5aa59b860ca4c38939.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p90",
    "skin": "Grim",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_grimm_light_large.59514d7b54f637f314329bb3fef1c7ffd1b153ba.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "negev",
    "skin": "Dazzle",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_hy_negev_dazzle_light_large.3558ece2a70252dcaa8ea9e324539ae1a4fc1bc0.png",
    "wearMin": 0.1,
    "wearMax": 0.65
  },
  {
    "weapon": "xm1014",
    "skin": "Slipstream",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_hy_xm1014_fractal_blue_light_large.e9720fb7b5928db8bcf79d62850af5bf475b9ec5.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "57",
    "skin": "Scumbria",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_aq_five_seven_scumbria_light_large.bc05fc6435b84525a0ab140bc72e032a98dab710.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ump45",
    "skin": "Briefing",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_metritera_light_large.46ac4388a9651c555ec6849358b85f60a87c328d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "cz75",
    "skin": "Imprint",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75_tread_light_large.8c276db730bb33477aaa52f7a23825f295e14364.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "g3sg1",
    "skin": "Ventilator",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_ventilator_light_large.5cd3643d4d9cd0599e25a1302e788611bd9a0023.png",
    "wearMin": 0,
    "wearMax": 0.45
  }
],
// #2 Knife old skin cases
caseHuntsman:  [
  {
    "weapon": "m4a4",
    "skin": "Desert-Strike",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_titanstorm_light_large.a161ff6ea23af2d9bbdc0a757f5163fa1ad87a30.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ak47",
    "skin": "Vulcan",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_rubber_light_large.5836c38d3037a5a1f90ffdc8c9d0b94367ca8efd.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "usps",
    "skin": "Caiman",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_kaiman_light_large.8ed168478e306bd382a90afb1b71ad9f7551b342.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "scar20",
    "skin": "Cyrex",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_cu_scar_cyrex_light_large.ee4da13e2d74d0fd1fdbaa8f2ca49eb1c7f0acca.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "m4a1s",
    "skin": "Atomic Alloy",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_am_m4a1-s_alloy_orange_light_large.82bd272d0256f17eb86029a8d1411c4e5bf2bc9c.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "mac10",
    "skin": "Tatter",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_korupt_light_large.e1efdcab099278a147fe2f07405214218e74e705.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ppbizon",
    "skin": "Antique",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_antique_light_large.06467175511976dae4219e9cb2fc8ab20df0e653.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "xm1014",
    "skin": "Heaven Guard",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_heaven_guard_light_large.c7f3f8815f9caa92daa5ffe4390880c1606f4a81.png",
    "wearMin": 0.03,
    "wearMax": 0.5
  },
  {
    "weapon": "aug",
    "skin": "Torque",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_progressiv_light_large.f712baf9253bd357c71a1525dac51e30298c9535.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "cz75",
    "skin": "Twist",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_am_gyrate_light_large.90f97369a79695a7fdcb633a9c9a9e56f29a05d5.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p90",
    "skin": "Module",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_an_royalbleed_light_large.58dfb4851908d78c31e205477793a620923737db.png",
    "wearMin": 0,
    "wearMax": 0.35
  },
  {
    "weapon": "p2000",
    "skin": "Pulse",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_pulse_light_large.a79fcfcd59202495573abfddc1e7627be62b4e1c.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "tec9",
    "skin": "Isaac",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_asiimov_light_large.9a4fb9bbf6f01209b8fd3effeda1eecfc1e5a9a3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "galil",
    "skin": "Kami",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_galil_kami_light_large.f1783721b5318ea51bcb7890bf9cd0084afcd3e3.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ssg08",
    "skin": "Slashed",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_immortal_light_large.294156dbab19f645942fe9cbafed88165aa70044.png",
    "wearMin": 0.15,
    "wearMax": 0.8
  }
],
howl:  [
  {
    "weapon": "m4a4",
	"skin": "Howl",
    "quality": "contraband",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a1_howling_light_large.c64a9fc9fa04b5d10d4b1e200135e59285c8a77c.png",
    "wearMin": 0,
    "wearMax": 0.4
  }
],
caseBreakout:  [
  {
    "weapon": "m4a1s",
    "skin": "Cyrex",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_cyrex_light_large.144b4053eb73b4a47f8128ebb0e808d8e28f5b9c.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p90",
    "skin": "Asiimov",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90-asiimov_light_large.0ca7f7fc032c98c5cc506ccde92b33e5836a8a88.png",
    "wearMin": 0,
    "wearMax": 0.92
  },
  {
    "weapon": "glock18",
    "skin": "Water Elemental",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock-liquescent_light_large.151e954ed4aef28ccc55d0ca4b43a7d9644f36ac.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "deagle",
    "skin": "Conspiracy",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_aureus_light_large.7fa76057cb05f2cab829be448f120ae540715d0e.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "57",
    "skin": "Fowl Play",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_aq_57_feathers_light_large.aa942f28d5fd868643b54ba0c317703d8b615754.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "nova",
    "skin": "Koi",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_koi_light_large.28c3fe03f736b48dee10e1e88e77ac02132dcba6.png",
    "wearMin": 0,
    "wearMax": 0.3
  },
  {
    "weapon": "p250",
    "skin": "Supernova",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_bittersweet_light_large.83cd48968d79412e0cf2233b8e18602ff2790ad4.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "cz75",
    "skin": "Tigris",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_c75a-tiger_light_large.b754b5a73c8f2b207942eb046efdbd4cade04513.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ppbizon",
    "skin": "Osiris",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon-osiris_light_large.269e03e1ad598b76adb884704c4f48d725beb5fc.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "ssg08",
    "skin": "Abyss",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_aq_leviathan_light_large.0d0ce425b5374642d0d1fbfd0c0ec634eb8570fb.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p2000",
    "skin": "Ivory",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_ivory_light_large.2a47b14b59ce796956958ce13cb60617148f7711.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ump45",
    "skin": "Labyrinth",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_hy_lines_orange_light_large.d004ea389236e6fa5da2f0555ab5b3723bdf36d1.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "negev",
    "skin": "Desert-Strike",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_titanstorm_light_large.eb7badc75ecbb1b4cdf35bfb53088731bbe11cb0.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp7",
    "skin": "Urban Hazard",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7-commander_light_large.260d3f2765c83f75eadac5abd6ef4187ea2c2089.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
caseFalchion:  [
  {
    "weapon": "awp",
    "skin": "Hyper Beast",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_hyper_beast_light_large.55efa5e3094af71ca6a56b6eac96cb022f7ecd8b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Aquamarine Revenge",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_courage_alt_light_large.27e4e7d38dc2ce36ffe86bd6ec65d6f525751eaa.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp7",
    "skin": "Nemesis",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_nemsis_light_large.72074e71a27827f41dc5d6f511d2f003c1b60d8a.png",
    "wearMin": 0,
    "wearMax": 0.32
  },
  {
    "weapon": "sg553",
    "skin": "Cyrex",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyrex_light_large.ef2fb1e4d88e8eb7c0efe12e231a773ca1792a4d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "cz75",
    "skin": "Yellow Jacket",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75a_chastizer_light_large.d3234c712c3c068adbbfd5718c468c778f2351dd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a4",
    "skin": "Evil Daimyo",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_evil_daimyo_light_large.c208ba252c0d8902caa973a634cbfa945508a716.png",
    "wearMin": 0,
    "wearMax": 0.52
  },
  {
    "weapon": "negev",
    "skin": "Loudmouth",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_annihilator_light_large.421039357ccbbcb9ba1456caa1ed2ae4829b5495.png",
    "wearMin": 0.14,
    "wearMax": 0.65
  },
  {
    "weapon": "p2000",
    "skin": "Handgun",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aq_p2000_boom_light_large.39f01b0b86b795bea56300432fecfbf93415ee58.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp9",
    "skin": "Ruby Poison Dart",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_am_mp9_nitrogen_light_large.3a0b5a7cd31a7cfd5f0d90b9a0a1dbfcdb642cca.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "famas",
    "skin": "Neural Net",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_am_famas_dots_light_large.dc6f19278bac52ea06b8e3576fa324624f2f82b4.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "galil",
    "skin": "Rocket Pop",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galilar_particles_light_large.8732f64d53dbc9b0c732641655d4f99124d8cacc.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "usps",
    "skin": "Torque",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_progressiv_light_large.91cde781cd0c8502bbbb66f37cc7f1baf2a10c05.png",
    "wearMin": 0,
    "wearMax": 0.46
  },
  {
    "weapon": "glock18",
    "skin": "Bunsen Burner",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_aq_glock18_flames_blue_light_large.5fed23d5a32793c25914eeb99b45f1a2b0cb9d6c.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "p90",
    "skin": "Elite Build",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_mastery_light_large.f58ff489c92ffa8c6e4c42814bad01c352df0ab6.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "nova",
    "skin": "Ranger",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_ranger_light_large.e3e9d3d47d5707092223a268ef59adb53ce76278.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ump45",
    "skin": "Riot",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_uproar_light_large.04cd84320c4370bced14a3989b0e141cff67ec88.png",
    "wearMin": 0,
    "wearMax": 0.7
  }
],
caseShadow:  [
  {
    "weapon": "usps",
    "skin": "Kill Confirmed",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_kill_confirmed_light_large.a3a7b8f19c9fb931b18c1edd7dd21d44e2c3c2e0.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a1s",
    "skin": "Golden Coil",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1s_snakebite_gold_light_large.574ace77e1044dbf3a387f200b2867332e974f70.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Frontside Misty",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_winter_sport_light_large.785a08aecd996dcffc6f38373fdc73697e601a6a.png",
    "wearMin": 0.02,
    "wearMax": 0.87
  },
  {
    "weapon": "ssg08",
    "skin": "Big Iron",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_technicality_light_large.1a057a14ca191ce12629e06217cbe86097444b03.png",
    "wearMin": 0,
    "wearMax": 0.64
  },
  {
    "weapon": "g3sg1",
    "skin": "Flux",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_flux_purple_light_large.6ed40e104625c9607e7df5ee60373a19d3dae634.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "galil",
    "skin": "Stone Cold",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_gs_galil_nightwing_light_large.bc71fb0b9102f22348f39015b7de5affd60829e0.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "p250",
    "skin": "Wingshot",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_hy_p250_crackshot_light_large.538a33bb8d7af894f965257c39f699168e125cdd.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "m249",
    "skin": "Nebula Crusader",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_gs_m249_nebula_crusader_light_large.60f60c9e8203575e3e3f5574db51132e2b2fe7c7.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp7",
    "skin": "Special Delivery",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_classified_light_large.231ba61751c2976258bf96b3d1db5ae6ecb03b95.png",
    "wearMin": 0,
    "wearMax": 0.62
  },
  {
    "weapon": "duals",
    "skin": "Dualing Dragons",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_dualberretta_dragons_light_large.2742674cbf237d1ba5fb6ed9f0d90e00a03570f9.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "glock18",
    "skin": "Wraiths",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock18_wrathys_light_large.8cf4aba20d193a1646b378a3d04a6fee3f66724c.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "famas",
    "skin": "Survivor Z",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_lenta_light_large.7ab508a407e56ab541dae127ef5fc64f09f6ae08.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "xm1014",
    "skin": "Scumbria",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_scumbria_light_large.b8e79b3c4391784151d789edde360dbaaef7fd1f.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Rangeen",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_alekhya_duo_light_large.7173900a6b75cee250a55197483cba3c0204b955.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mag7",
    "skin": "Cobalt Core",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_myrcene_light_large.7cd0ed89db7accc44d3289f9f1529e0a75f4643e.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "scar20",
    "skin": "Green Marine",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar20_peacemaker03_light_large.061f9ac2ff0a040f6fcc296c451c09fe2e198f83.png",
    "wearMin": 0,
    "wearMax": 0.8
  }
],
caseWildfire:  [
  {
    "weapon": "ak47",
    "skin": "Fuel Injector",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_supercharged_light_large.8a0d53e84b7049366a3e3dbb25d29f473d76dceb.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a4",
    "skin": "The Battlestar",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_pioneer_light_large.2dcc4c93ad184179e34b9359090d7398718d36e4.png",
    "wearMin": 0,
    "wearMax": 0.64
  },
  {
    "weapon": "deagle",
    "skin": "Kumicho Dragon",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_aq_deserteagle_kumichodragon_light_large.19874e9a20cfac49efbe1f1557b995e453633ffe.png",
    "wearMin": 0,
    "wearMax": 0.76
  },
  {
    "weapon": "awp",
    "skin": "Elite Build",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_mastery_light_large.617e335043f250cdb9d6a4c798e075be9560cdd4.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "nova",
    "skin": "Hyper Beast",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_hyperbeast_light_large.ec64e1aa22dc78fa692a2269a99669842b91cc6f.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "glock18",
    "skin": "Royal Legion",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock18_award_light_large.198c0dc5630970b1f3bbcb307a1318745ca006e7.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "famas",
    "skin": "Valence",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_aq_famas_contour_light_large.65d515ab34a6f50c8a5296b562a81da42663b819.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Impire",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_mp7_impire_light_large.aee431bcc2114fbc9f5cf46ca9735c86ddb450ba.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "mag7",
    "skin": "Praetorian",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_praetorian_light_large.55d96fbd30315911a2397ef950887e8fda43a3ec.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "57",
    "skin": "Triumvirate",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_augmented_light_large.eb79857bc2e4b80f4edf61a0c5a72fbae80f3a20.png",
    "wearMin": 0,
    "wearMax": 0.61
  },
  {
    "weapon": "usps",
    "skin": "Lead Conduit",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_gs_usp_voltage_light_large.11e40b4d4fc09043d4fa513f3913ca65ffcfbb41.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ppbizon",
    "skin": "Photic Zone",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_citizen_light_large.c33a99fe761fc52535224e73d2af91b92ac77637.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ssg08",
    "skin": "Necropos",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_necropos_light_large.cd2f32aa0349edcad3aefae80b509fc5962a2b30.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Cartel",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_aq_dualberettas_cartel_light_large.52ed24116db8a7254a366ea9f4f49b3ceff9eed3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Jambiya",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_jambiya_light_large.d1f42521bb774564f80a512c3990e768179cf111.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Lapis Gator",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_electricity_light_large.88207515fce5ebad84df16d60ff2203a5d4a2702.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
// #2 Knife - Chroma cases
caseSpectrum:  [
  {
    "weapon": "ak47",
    "skin": "Bloodsport",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_bloodsport_light_large.40f076f6b92e08acc37860923533aa9768795b2b.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "usps",
    "skin": "Neo-Noir",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usps_noir_light_large.ed0f4245c1b9031c6d410300ce6de1f1efb75481.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "m4a1s",
    "skin": "Decimator",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_decimator_light_large.5af82e99273fcc0a4ad35b2971b63787ee989d6a.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "awp",
    "skin": "Fever Dream",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_psychopath_light_large.11e54a670b779e1757cce18ea252d70eb35c6a75.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "cz75",
    "skin": "Xiangliu",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz_snakes_purple_light_large.a06599fab1d73352fd970fc0356c215c50ca7e9a.png",
    "wearMin": 0,
    "wearMax": 0.56
  },
  {
    "weapon": "m249",
    "skin": "Emerald Poison Dart",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_sp_m249_frog_original_light_large.7331eb3d676ebdf8df71adb58b43aea63660f785.png",
    "wearMin": 0,
    "wearMax": 0.45
  },
  {
    "weapon": "ump45",
    "skin": "Scaffold",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_gs_ump_abyss_light_large.55910298a6be9b071156ef176a31d26007d92d0f.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Last Dive",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_aa_mac10_the_last_dive_light_large.d0039a83384acbe26f9337c8a83e81f6410b7dc9.png",
    "wearMin": 0,
    "wearMax": 0.52
  },
  {
    "weapon": "galil",
    "skin": "Crimson Tsunami",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_sp_galil_wave_light_large.0a4761ebb660428a77a622885054e1c44cf03959.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "xm1014",
    "skin": "Seasons",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm_leaf_fade_light_large.f753b1b710a8023e299d1918ca150b42483ca1cd.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "deagle",
    "skin": "Oxide Blaze",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_desert_eagle_corroden_light_large.5fde2cc1c9b82b0e9823445c7fb2be334bc286af.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "scar20",
    "skin": "Blueprint",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_cu_blueprint_scar_light_large.9a71e8191c2b2081f5fd3884f57f919663b26ee5.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "57",
    "skin": "Capillary",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_vein_light_large.464ec691b3c3c9c828aa1a8d4e2b076daa4b7a4f.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "sawedoff",
    "skin": "Zander",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawedoff_zander2_light_large.514f7c6c606296838f56020877d7762c594dc4bd.png",
    "wearMin": 0.05,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "Ripple",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_am_p250_sputnik_light_large.38766530975aaa4006dda7a24533ac1b05a6b6a8.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp7",
    "skin": "Akoben",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_sp_mp7_tribal_yellow_light_large.1c05d27487feb5d82e8165721942ea3a67e6ba33.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ppbizon",
    "skin": "Jungle Slipstream",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_hy_bizon_torn_green_light_large.1aa076ede6a2511bf676ffb1c5a3eafca71c58a6.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
caseSpectrum2:  [
  {
    "weapon": "ak47",
    "skin": "The Empress",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_empress_light_large.f81d0b07dca381635c89f74bcdb6b64a6da6e81c.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "See Ya Later",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_cybercroc_light_large.396de1d53797f8875d242d1eb33d5b81dce2bb8e.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "m4a1s",
    "skin": "Leaded Glass",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1_shatter_light_large.f4d487cbf956eb13a505b8926c8f0f63cb3604b3.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ppbizon",
    "skin": "High Roller",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_all_in_light_large.d31ae97fe448b550cfe06d617daa3575c77e8c2a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "r8",
    "skin": "Llama Cannon",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_llamacannon_light_large.ae4ce84764b4892a2ea2d3f9f0afc57023f7bdc8.png",
    "wearMin": 0.03,
    "wearMax": 0.7
  },
  {
    "weapon": "cz75",
    "skin": "Tacticat",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_gs_cz75_tacticat_light_large.ed9ba2f6cb8fd5e2a2b6cfb1b9a0ba4c87c93ec3.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "mp9",
    "skin": "Goo",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_goo_light_large.3cab8ecb356ee5f2549c1b148f5961fdf5d9cd76.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "sg553",
    "skin": "Phantom",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_phantom_light_large.51fc477c1024614f6f52080d3b7200408c9d2881.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "xm1014",
    "skin": "Ziggy",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_aq_xm1014_ziggy_anarchy_light_large.7042642ba5043be6e1cb82d6bb9a05678402dea1.png",
    "wearMin": 0,
    "wearMax": 0.72
  },
  {
    "weapon": "ump45",
    "skin": "Exposure",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump45_x-ray_machine_light_large.a4563e015fd33d1874cc220458db2754a15dd08a.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "glock18",
    "skin": "Off World",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_indigo_light_large.3786c7c3be7d03ee053050af2f7a8427782742e1.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Triqua",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_orange_triangle_light_large.793eb05ec841c2664b8482565e5d080c731d6ecd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Cracked Opal",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_cracked_opal_light_large.d6e9cc1c31550faeac9c55341be170abf07245b7.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Oceanic",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_am_mac10_oceani_light_large.25e5d3d5e249e11fe32971fa7bcdc0e5a1c777bd.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "sawedoff",
    "skin": "Morris",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_aq_sawed-off_flower_light_large.0d98b08ce8023d49dac2f76b10ef2f3cd7a33350.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "g3sg1",
    "skin": "Hunter",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_cetme_redux_light_large.18ad1afdb32fca22879dcdd22e579c5afaef6ad8.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "scar20",
    "skin": "Jungle Slipstream",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_hy_scar20_jungle_slipstream_light_large.d49f99ac854c1a25fc46bde5dd32f438bdd587f1.png",
    "wearMin": 0,
    "wearMax": 0.5
  }
],
// #3 Knife old skin cases
caseHorizon:  [
  {
    "weapon": "ak47",
    "skin": "Neon Rider",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_neon_rider_light_large.9209192b514c4ec98146b4747dec8ce407a977c8.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "deagle",
    "skin": "Code Red",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_aggressor_light_large.51ffb87f03ae0d3c467d4412f3c246067748e61d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a1s",
    "skin": "Nightmare",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_nightmare_light_large.68e892eb4dedad809205a5fd06f175297d1be1cb.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "famas",
    "skin": "Eye of Athena",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_owl_orange_light_large.7cb3a86d36317530964f40d66b755789de7ca88a.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "sawedoff",
    "skin": "Devourer",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_devourer_light_large.d8365e13320f20eb532a2d5109e1fc35562bc376.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "awp",
    "skin": "PAW",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_am_awp_pawpaw_light_large.0ff115c31307cc3122536c44a9aef7e64277dc19.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "nova",
    "skin": "Toy Soldier",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_toy_soldier_light_large.e35320d18405b77fb9dd5e495fe4f625b8ab6c82.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "cz75",
    "skin": "Eco",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75_eco_light_large.19aa7b914ac71968e73ac48b112b9f4c8116c767.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp7",
    "skin": "Powercore",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_gs_powercore_mp7_light_large.cff12134204aef1ddc67e142088a2b7cec911960.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "g3sg1",
    "skin": "High Seas",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_buccaneer_light_large.68c69e9856fd43f17a4165d1f27116496657fd00.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "glock18",
    "skin": "Warhawk",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock_thunder_dust_light_large.0e26afdd95bac17ce01c6e097ca0b97db3cffee4.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p90",
    "skin": "Traction",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_tread_light_large.0acb87de3db60e1c07aa159fd5b8238b11bb8f8f.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Snek-9",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_snake_light_large.9065015e55daa4190b97a8bc033925ed0aeb1abd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp9",
    "skin": "Capillary",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_vein_light_large.d0189b21fba4603ff88d407d6af0e63093f22ba7.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "duals",
    "skin": "Shred",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_sp_elites_winter_raider_light_large.eddc2e91d0081e57588b745589209094a6b3e9b6.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "aug",
    "skin": "Amber Slipstream",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_hy_aug_torn_orange_light_large.53b51a022d38ea39eff5ffbed92551dc741e17c3.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "r8",
    "skin": "Survivalist",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_cu_r8_survivalist_light_large.cda482f11a63c89c574211b8d5ea9a60703e3cd2.png",
    "wearMin": 0,
    "wearMax": 0.7
  }
],
caseDangerZone:  [
  {
    "weapon": "ak47",
    "skin": "Asiimov",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_asiimov_light_large.665fc3b83c8046398787a57d2ef7a9d938244820.png",
    "wearMin": 0.05,
    "wearMax": 0.7
  },
  {
    "weapon": "awp",
    "skin": "Neo-Noir",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_neonoir_light_large.c5dd57f8555d13c41f08024f27a9314074b698af.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "deagle",
    "skin": "Mecha Industries",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_mecha_light_large.e08c1fd8709f6b368956c41c68b17c15ff635635.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "ump45",
    "skin": "Momentum",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_arrows_light_large.83f1e692bdafa92f29ce15aebb02502c9e70f276.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp5sd",
    "skin": "Phosphor",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_festival_drip_light_large.c71af0a784e5ecd6e5d5f2f71961be155e283cde.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "usps",
    "skin": "Flashback",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_flashback_light_large.47e10129af33303bac557560400c33e4fe555680.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "p250",
    "skin": "Nevermore",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aa_p250_gravediggers_light_large.df680e4648f5e08ec6e92ed36a5b9c05ae8bc5f4.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "galil",
    "skin": "Signal",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_hy_galil_signal_red_light_large.d7c26f54fd72ec451094ea7791e921346e013197.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mac10",
    "skin": "Pipe Down",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_exo_pipes_light_large.355aad3fa1602f8e682a5663f72b12feba0d4cf2.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "g3sg1",
    "skin": "Scavenger",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_gs_g3sg1_savage_light_large.e452574f580f51b1da6312c0f80a0dc07e073d8b.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "m4a4",
    "skin": "Magnesium",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_chopper_ghost_light_large.374913da49233223de4ca1ff09a20cc2a7a94288.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Fubar",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_fubar_light_large.00f64007983561f57c808b23e9260ebea6437bc7.png",
    "wearMin": 0.14,
    "wearMax": 1
  },
  {
    "weapon": "glock18",
    "skin": "Oxide Blaze",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock18_corroden_light_large.68906a0523399b599555746b51db2ffac29c5db5.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "mp9",
    "skin": "Modest Threat",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_gs_mp9_colony01_light_large.f8d9792131b786025a960ddeda2eeb77f97c55e3.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "sg553",
    "skin": "Danger Close",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_over_heated_light_large.aba3188360b2a87b8687d73af6c2e3034290402c.png",
    "wearMin": 0.02,
    "wearMax": 0.8
  },
  {
    "weapon": "sawedoff",
    "skin": "Black Sand",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_black_sand_light_large.7ed9ce5083489c0fdf92814f0ebf6945ec6f29d4.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "nova",
    "skin": "Wood Fired",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_gs_nova_hunter_brute_light_large.8e2520f25098056ccd03b679859458fdc006c0a7.png",
    "wearMin": 0,
    "wearMax": 0.75
  }
],
// #3 Knife - Chroma
casePrisma:  [
  {
    "weapon": "m4a4",
    "skin": "The Emperor",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4a4_emperor_light_large.61be48559b0a5d57e04108f876f5cf755ec8acc8.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "57",
    "skin": "Angry Mob",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_five_seven_angry_light_large.54986e86178e0462d34fe78b6b726292813541f5.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "aug",
    "skin": "Momentum",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_momentum_light_large.1f36037cec707a957785625f04b3740bb5286d16.png",
    "wearMin": 0.05,
    "wearMax": 1
  },
  {
    "weapon": "xm1014",
    "skin": "Incinegator",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_incinerator_light_large.7649f64bbfea49d6f0d951320e0bdd98d6bee088.png",
    "wearMin": 0.14,
    "wearMax": 0.65
  },
  {
    "weapon": "r8",
    "skin": "Skull Crusher",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_cu_revolver_oppressor_light_large.59414a184bcf3310d43528701292ba4f68ba55a0.png",
    "wearMin": 0.25,
    "wearMax": 0.8
  },
  {
    "weapon": "awp",
    "skin": "Atheris",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_viper_light_large.2de75408a7c595312d58203f53c73a3a18faa4a3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "deagle",
    "skin": "Light Rail",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_gs_deagle_exo_light_large.8bdc93f1b45efba187748065deff967eef8f2f2d.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "tec9",
    "skin": "Bamboozle",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_bamboo_light_large.24d8986c41f344d8c1e9167a935c7b904757f85e.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "ump45",
    "skin": "Moonrise",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_aa_ump45_moonrise_sunset_light_large.63cf279a66d95757f4fefe498b89480966887083.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "mp5sd",
    "skin": "Gauss",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5sd_astromatic_light_large.d7acba118f13e4b7b0d9146dddd32cf71da9210d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Uncharted",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_aztec_light_large.368d90ba7bc01aa56489792a8962df5343238c5c.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "galil",
    "skin": "Akoben",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_sp_galil_akoben_light_large.35a9e7a0fa943ac20d1b145d36bf3d4ccf33cc84.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "p90",
    "skin": "Off World",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_offworld_light_large.45f1db5b8b435574f46fffe77960d8ef29519eca.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "mac10",
    "skin": "Whitefish",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_fish_bait_light_large.31a855282029b915748b21c11521b5f111b05e67.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "Verdigris",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_aq_p250_verdigris_light_large.379d19af038211ca3bf7d20c4c75726e9be36856.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "famas",
    "skin": "Crypsis",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_sp_famas_ghost_insects_light_large.727c7db3f6df4aae8b692f6966dba460acafb07f.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "mp7",
    "skin": "Mischief",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_racketeer_light_large.ba5b3641b7b309cdd16d9f54fc2bc2331e738929.png",
    "wearMin": 0.1,
    "wearMax": 1
  }
],
casePrisma2:  [
  {
    "weapon": "m4a1s",
    "skin": "Player Two",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_csgo2048_light_large.6531225ca224416df4dc6aa12c6ecea582b1e110.png",
    "wearMin": 0,
    "wearMax": 0.84
  },
  {
    "weapon": "glock18",
    "skin": "Bullet Queen",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock18_warmaiden_light_large.d99a6fdb4c1469d164182a74edba8de055726aa5.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Phantom Disruptor",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak-47_phantom_disruptor_light_large.c14fcebe17a4c1a509edc597b33dcb9b5dcda32b.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "mac10",
    "skin": "Disco Tech",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_nacre_light_large.80fa2f0691e37e6e2a2755b8a7f6ccd6bfa83f3b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mag7",
    "skin": "Justice",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_justice_light_large.fcdc73ab779ab093ee7d90d91c1e3c369bbc8d65.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ssg08",
    "skin": "Fever Dream",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_fever_dream_light_large.cec554a86204344d6476b9071158fd02963a1aac.png",
    "wearMin": 0,
    "wearMax": 0.72
  },
  {
    "weapon": "sg553",
    "skin": "Darkwing",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_darkwing_light_large.f9c302279afebdd221344fa59f738f9317dc4122.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p2000",
    "skin": "Acid Etched",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aq_p2000_acid_clover_light_large.9b6c7f2c0bd30dc66570c41101129e1a624ab7b8.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "scar20",
    "skin": "Enforcer",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar20_enforcer_light_large.20eba3a5a84f35019ceb7faae45a0b4246a72998.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "sawedoff",
    "skin": "Apocalypto",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_apocalypto_light_large.fc0f69fec04cf4d6955ef4aa6629d083aa554af6.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "awp",
    "skin": "Capillary",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_vein_light_large.8665dc4b4231298e9bbcab7aad3abbbf22e3edd8.png",
    "wearMin": 0.05,
    "wearMax": 0.7
  },
  {
    "weapon": "deagle",
    "skin": "Blue Ply",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_replica_light_large.900a30787dd7f4f32435cc55e56dc345d780baae.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Tom Cat",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_thunderstorm_light_large.127ba1a9f7c7eef6b701bf01ad50b3b146f9b951.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mp5sd",
    "skin": "Desert Strike",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_cu_mp5_desert_strike_light_large.44958e2a47446043d6c929d5f4b4e3bea10f41c9.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "negev",
    "skin": "Prototype",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_prototype_light_large.d1e542d85756bfc96bb32e6d2f8b548fbb26b2ad.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "cz75",
    "skin": "Distressed",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_cz75a_cu_cz75_cerakote_light_large.2f8286a9ca2313c23c6d9ad8d1c94650ef856c37.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "r8",
    "skin": "Bone Forged",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_leviathan_light_large.656b77eecd4ef8f55f11866cce3da2778d6cc7d5.png",
    "wearMin": 0,
    "wearMax": 0.6
  }
],
// #4 Knife old skin cases
// Classic knife (CS20 case)
caseCS20:  [
  {
    "weapon": "awp",
    "skin": "Wildfire",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_wildfire_light_large.61e36b12eb45a39836cdb5badb5a536737684861.png",
    "wearMin": 0.01,
    "wearMax": 0.7
  },
  {
    "weapon": "famas",
    "skin": "Commemoration",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_legacy_gold_light_large.34013884c12276d1c83ceb4ea9fb83428df02920.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mp9",
    "skin": "Hydra",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_hydra_light_large.b7763a811b3bc9d19d04502fba0edc6cbe355766.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Death by Puppy",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_am_aug_death_by_doggy_light_large.eb9b56273d30c50b93d2cb0a2e2843b525012878.png",
    "wearMin": 0,
    "wearMax": 0.4
  },
  {
    "weapon": "p90",
    "skin": "Nostalgia",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_cu_p90_nostalgia_light_large.8d1cfe3582915ab9702b57e1376eb0d0ffab2331.png",
    "wearMin": 0,
    "wearMax": 0.57
  },
  {
    "weapon": "mp5sd",
    "skin": "Agent",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_fbi_light_large.98c397d31feb201fd3d754a2e0b1d1508d75b2b9.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ump45",
    "skin": "Plastique",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_bomb_light_large.48162f997295cb72c35acb2eafbef620b60a1659.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "p250",
    "skin": "Inferno",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_inferno_light_large.89b435cf4b1eab8a9fed8f7aa19228fe9421b4eb.png",
    "wearMin": 0,
    "wearMax": 0.68
  },
  {
    "weapon": "57",
    "skin": "Buddy",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_gsg9_light_large.870dec48f951d3a6420bdb332f0acd25ee1254b1.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "m249",
    "skin": "Aztec",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_aq_m249_aztec_light_large.81173c5b61be806039e643a0c273e4dce33bd5ee.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "glock18",
    "skin": "Sacrifice",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_hero_light_large.7b0f5975c7e0ba3ce1694c4795520184fc56c367.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "famas",
    "skin": "Decommissioned",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_nuke_tension_light_large.0cf9412e22f626e675b76506cf2f240a64a05b22.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Elite 1.6",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dual_elites_classic_light_large.a899ad9f2e1bb8522fdeb022c99c64c2456826d1.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "tec9",
    "skin": "Flash Out",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_flash_light_large.977076b5fe7a2fdb9337de2a3ff7c4b867e9b674.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "scar20",
    "skin": "Assault",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_cu_scar_assault_light_large.57aa89979dfaab334bb3e91c09f54269e98cf47a.png",
    "wearMin": 0,
    "wearMax": 0.62
  },
  {
    "weapon": "mac10",
    "skin": "Classic Crate",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_dust_crate_light_large.988816a75bc41f34cb18aff91ce6256299a9a52c.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mag7",
    "skin": "Popdog",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_popdog_light_large.3c45fd23cd1947bb9b1747e36823980a44feaed4.png",
    "wearMin": 0,
    "wearMax": 0.8
  }
],
caseShatteredWeb:  [
  {
    "weapon": "awp",
    "skin": "Containment Breach",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_virus_light_large.00307f818d425d94cb8e4eeda1e27699f713fb45.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mac10",
    "skin": "Stalker",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_gs_mac10_stalker_light_large.cb4d7a60a69978f1575526f979be8e1e1538a673.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ssg08",
    "skin": "Bloodshot",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_tickler_light_large.b6a73afa62f8983211740a1570410df4864f45f6.png",
    "wearMin": 0.14,
    "wearMax": 0.6
  },
  {
    "weapon": "tec9",
    "skin": "Decimator",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_decimator_light_large.11236163667e1dd46c3d869d844e384a23544513.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "sg553",
    "skin": "Colony IV",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_reactor_light_large.af5c07d2528198641adf32cf3498aa7d2823b048.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Rat Rod",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_nibbler_light_large.1c402d395b628aa5667239eec44640d7f603d754.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Arctic Wolf",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_cu_aug_whitefang_light_large.051b21da4e56c64ad78ee8a67a0e9e237a4e01b1.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ppbizon",
    "skin": "Embargo",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_road_warrior_light_large.92dd3aa0346010a6e3a625d01ae4f965195a05d2.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp7",
    "skin": "Neon Ply",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_replica_light_large.f56c050cb5147918efb6872ce61fda358a684cf5.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p2000",
    "skin": "Obsidian",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_obsidian_light_large.0a6ad31fe8f70401ffdd377c289309d0256282c6.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Balance",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dual_elites_rose_light_large.8df8980203b198879875be44656361ccbb41791e.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "r8",
    "skin": "Memento",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_memento_light_large.8ca600a94c72b5a3b33bb826a1a588f7e48d5e78.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "nova",
    "skin": "Plume",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_nova_cu_nova_featherswing_light_large.49e81792746dc7844ff18c45fb23030cd8b66d59.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "g3sg1",
    "skin": "Black Sand",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_g3sg1_blacksand_light_large.8a9b364779493ae19a87eb4e73aa47f4432d3f41.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mp5sd",
    "skin": "Acid Wash",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_etch_light_large.a86867a43e3607c1826b6d106870bf69642687b0.png",
    "wearMin": 0,
    "wearMax": 0.68
  },
  {
    "weapon": "m249",
    "skin": "Warbird",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_gs_m249_warbird_veteran_light_large.29a2ee22222b037e6825fb0c230aa799718e4115.png",
    "wearMin": 0.05,
    "wearMax": 0.65
  },
  {
    "weapon": "scar20",
    "skin": "Torn",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_sp_scar20_striker_dust_light_large.0842dbdf0fe714c92f634b376e15c2f8c21b6d56.png",
    "wearMin": 0,
    "wearMax": 0.45
  }
],
caseFracture:  [
  {
    "weapon": "deagle",
    "skin": "Printstream",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deag_printstream_light_large.b468e56607da39fb2c88e493456290fd5db174c8.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "ak47",
    "skin": "Legion of Anubis",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_anubis_light_large.77994b9d6a2f3020c0c5aa8c9c7f70357d460bff.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "glock18",
    "skin": "Vogue",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_eyecontact_light_large.fb7988d1d3d9ff159f81d3c0d9a2eacb976e2842.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "m4a4",
    "skin": "Tooth Fairy",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_queenfairy_light_large.e5fb022145442cf85ba485d8c3cfd4f6391938e0.png",
    "wearMin": 0,
    "wearMax": 0.73
  },
  {
    "weapon": "xm1014",
    "skin": "Entombed",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_cu_xm1014_amulet_blue_light_large.1375467de64fba676253ac771bc9ce8f83b6a8f7.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mag7",
    "skin": "Monster Call",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_monster_call_light_large.8bd66022cda47ab85f73e765dc35526e6a2ce7f0.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "galil",
    "skin": "Connexion",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_gs_galil_phoenix_light_large.62909a6e708a56e8679b9aa9225ba438b1539511.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mac10",
    "skin": "Allure",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_isoonna_light_large.004a4ddf7e9318cfbe98448b1c3b888fd4aff8dd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Brother",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_gs_tec9_guerilla_light_large.796534c0914361eec796eccd5558930096f75f96.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp5sd",
    "skin": "Kitbash",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5sd_wasteland_legacy_light_large.95ba928dc2c910eb819194227aa9196fdf6d9eea.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "ssg08",
    "skin": "Mainframe 001",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg08_mainframe_light_large.7d7d861da80bfecbe5141f19fbd32b95fb4496cf.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ppbizon",
    "skin": "Runic",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_gs_bizon_hellraider_light_large.c7aa487268b1e88b2e7fb1ff3c8c2eeeb24d4500.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p2000",
    "skin": "Gnarled",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_aq_p2000_lost_world_light_large.1d8b2a14b2b5b787ba450205bb3f133678dbe682.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p90",
    "skin": "Freight",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_container_light_large.ee8d779318fc1367b1c63bbfa202d6261a0171c1.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "Cassette",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_cassette_light_large.8e62f8c18421bceb377e95aa6a806b5767fcf731.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "negev",
    "skin": "Ultralight",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_ultralight_light_large.f47680cfcd5c2eb1594fd5ae51ed9caf1bb6d9cd.png",
    "wearMin": 0,
    "wearMax": 0.79
  },
  {
    "weapon": "sg553",
    "skin": "Ol' Rusty",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_gs_sg553_rusty_light_large.c5dd8204f44be6e68069633eb261b66641444ff6.png",
    "wearMin": 0,
    "wearMax": 0.7
  }
],
// Recent cases
// #2 Knife - Gamma cases
caseRiptide:  [
  {
    "weapon": "deagle",
    "skin": "Ocean Drive",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_deagle_cu_deagle_kitch_light_large.0df9b5246d27786b413642f5fc959f37d8892c3a.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ak47",
    "skin": "Leet Museo",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_gs_ak47_abstract_light_large.c0eca2ab0cee2c60491b9b64358f72ae4398e78a.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "glock18",
    "skin": "Snack Attack",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_snackattack_light_large.145d863714fb0fd6f766ef28f3639c0efded5018.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "ssg08",
    "skin": "Turbo Peek",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ssg08_cu_ssg_overtake_light_large.62261051818eb21f13e782cd49a33970360b4581.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "mac10",
    "skin": "Toybox",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_toybox_light_large.0eaa520b37c7d53ed3ef541e59d2303714c7e21d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a4",
    "skin": "Spider Lily",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_gs_m4_flowers_light_large.9953864326ad495e32b855ac45d96367b149be90.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "famas",
    "skin": "ZX Spectron",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_cu_famas_spectron_light_large.5212ab188ec7d54b55d4280c3b508b11b1f567ed.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp9",
    "skin": "Mount Fuji",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_aa_mp9_fuji_pink_light_large.5c7bf05ff05d82c34b6d71a3aa97537e55cec97e.png",
    "wearMin": 0,
    "wearMax": 0.55
  },
  {
    "weapon": "57",
    "skin": "Boost Protocol",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_gs_five_seven_efusion_light_large.78c44b69ab40456b90279ad0252463e9de816e78.png",
    "wearMin": 0,
    "wearMax": 0.41
  },
  {
    "weapon": "mag7",
    "skin": "BI83 Spectrum",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_gs_mag7_bismuth_light_large.f5df59b5024b23a1ca187985b7650e337adda4b4.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "usps",
    "skin": "Black Lotus",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_black_lotus_light_large.d40de54b67e255871a2a31a15e871e8d185049ea.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "xm1014",
    "skin": "Watchdog",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_gs_xm1014_watchdog_light_large.5443196414c00a57b26d9af50d4a75a35dd8dbd8.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "aug",
    "skin": "Plague",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_aug_gs_aug_plague_light_large.d7c01b0e4e2bc1e890cf3965874fad8a1bb27a17.png",
    "wearMin": 0,
    "wearMax": 0.76
  },
  {
    "weapon": "ppbizon",
    "skin": "Lumen",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_gs_bizon_flasher_light_large.a200d5213d5fe9f2e74b5ca5b9ce8eeb7eee4d5f.png",
    "wearMin": 0,
    "wearMax": 0.77
  },
  {
    "weapon": "mp7",
    "skin": "Guerrilla",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_khaki_light_large.c9fb92fece0f425328e2c5c8c536302ed2dbcf99.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Tread",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_gs_dual_berettas_tread_light_large.c48f5d783dd8f91dabffcd64cd2d95690b309ce5.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "g3sg1",
    "skin": "Keeping Tabs",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_g3sg1_tacticalmap_light_large.c1340d04161c17f48cf0091a52f649c1e9bd8d41.png",
    "wearMin": 0,
    "wearMax": 0.7
  }
],
caseDreamsNightmares:  [
  {
    "weapon": "ak47",
    "skin": "Nightwish",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_nightwish_light_large.0c4581be094e2bd732bec18ebdad2f71b1018af2.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp9",
    "skin": "Starlight Protector",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_gs_mp9_starlight_light_large.79d29560c71c4ba592824c1a1e3a8172cc7269be.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "mp7",
    "skin": "Abyssal Apparition",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp7_cu_mp7_fear_light_large.17f608ce70f44af09c1a92c541430804429ae2d6.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Melondrama",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_elites_beware_light_large.3a4517010e237136f9cca5c593beedd94a2a0a15.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "famas",
    "skin": "Rapid Eye Movement",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_rapid_eyes_light_large.8a166e6d36121b16dddc11b9aca94d5c541b0b56.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a1s",
    "skin": "Night Terror",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_gs_m4a1s_insomnia_light_large.265e6eb866d751caf4bbe7f8c8b62e400c5f0175.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "usps",
    "skin": "Ticket to Hell",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_to_hell_light_large.13912fa139f2055f7e3044a234ad111bbbce548f.png",
    "wearMin": 0,
    "wearMax": 0.76
  },
  {
    "weapon": "ppbizon",
    "skin": "Space Cat",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_bizon_cu_bizon_spacecat_light_large.c2c9bbf949c4bdf2ce3173cd2447559177716dd3.png",
    "wearMin": 0,
    "wearMax": 0.67
  },
  {
    "weapon": "g3sg1",
    "skin": "Dream Glade",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_g3sg1_cu_g3sg1_glade_light_large.93e176857183136f472c81b75331929d7b51d3ad.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "xm1014",
    "skin": "Zombie Offensive",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_xm1014_am_xm_zombie_offensive_light_large.0e15d69fbf9b3d93b14f54f85fa84bcb45c8f49e.png",
    "wearMin": 0,
    "wearMax": 0.5
  },
  {
    "weapon": "mac10",
    "skin": "Ensnared",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_pixie_light_large.26950e30ef7e74e69920d67965c409b8b88902c8.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "57",
    "skin": "Scrawl",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_fiveseven_cu_fiveseven_alpha_omega_light_large.698d00d53621c1b2358655aaff4f729bc0ed6300.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp5sd",
    "skin": "Necro Jr.",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_gs_mp5_kid_necronomicon_light_large.87443871e29948cd2cea24c01bd241b3623e91dd.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "sawedoff",
    "skin": "Spirit Board",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_ouija_light_large.79ee13876374fa1fd2f04bea84124c265fb55407.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p2000",
    "skin": "Lifted Spirits",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2k_flying_dream_light_large.db13d5d635e72a5c6d5ab742a6fa3a1ec4129405.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mag7",
    "skin": "Foresight",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_predictor_light_large.431734cae141d06a20fa3615d38e3b15c708602a.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "scar20",
    "skin": "Poultrygeist",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_sp_scar_chickenfight_light_large.b32fde27f0f45456b4c1e5f049be6f44bc8649b7.png",
    "wearMin": 0,
    "wearMax": 0.57
  }
],
// Gloves 3
caseRecoil:  [
  {
    "weapon": "usps",
    "skin": "Printstream",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_usp_silencer_cu_usp_printstream_light_large.9f5bcd4f94db3d965b3b2e7c3aace470e9466380.png",
    "wearMin": 0,
    "wearMax": 0.85
  },
  {
    "weapon": "awp",
    "skin": "Chromatic Aberration",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_cu_awp_chroma_pink_light_large.afc69cbf51b04e24149744b6ee1d998cc18d3002.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ak47",
    "skin": "Ice Coaled",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak47_cogthings_light_large.9b4678a70c315e5d60a203436b7a95cd4c5dcc89.png",
    "wearMin": 0,
    "wearMax": 0.77
  },
  {
    "weapon": "sawedoff",
    "skin": "Kiss♥Love",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sawedoff_cu_sawedoff_kisslove_light_large.55dc07f073e8c5ce65f21e4fb5957625db7ba266.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p250",
    "skin": "Visions",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_gs_p250_visions_light_large.a47ba6d191d3c734c3248667fb341a0e3f0c423e.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "r8",
    "skin": "Crazy 8",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_revolver_purple_elite_light_large.12a25ff5490bc9199a7ef870677455e42b9d8847.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "duals",
    "skin": "Flora Carnivora",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_elite_cu_dual_elites_evil_flora_light_large.3afd7e8e7cf008e4b38a206b79adae3b9d0d7757.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "sg553",
    "skin": "Dragon Tech",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyber_dragon_light_large.563b70babc5251fe5df218140582cd0aa576701e.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "p90",
    "skin": "Vent Rush",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_tangled_light_large.d1c6b11dc6876f1cf546281df8b8fac68a037518.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "m249",
    "skin": "Downtown",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m249_cu_m249_downvote_light_large.9d51d5d89b1df07b160580b5b929f66f06bb8310.png",
    "wearMin": 0,
    "wearMax": 0.65
  },
  {
    "weapon": "mac10",
    "skin": "Monkeyflage",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_monkeyflage_light_large.8f24ab7b33719d43a7d4e0886cb3f79d506e7068.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a4",
    "skin": "Poly Mag",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_elite_tactical_light_large.015fd86aa32f4f0331aa1b7dc2571d89dbf38671.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "glock18",
    "skin": "Winterized",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_gs_glock_elite_camo_light_large.00d135c0b32cabd8b48692d11794c830a9a4de5c.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "famas",
    "skin": "Meow 36",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_famas_gs_famas_corp_meow_light_large.7e27ced9616b1a4808cad37e8c0c653b9c866f07.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "galil",
    "skin": "Destroyer",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_galilar_cu_galil_destroyer_light_large.00308096b32ca8c6252ed241878ca1ec5e743c36.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ump45",
    "skin": "Roadblock",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_gs_ump_roadblock_light_large.d6b1372a575db666a8a7f039a39c05597d6cb60b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "negev",
    "skin": "Drop Me",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_negev_cu_negev_clear_sky_light_large.fc6f06d0f44e71207660f44b9b56021ce42a7e46.png",
    "wearMin": 0,
    "wearMax": 1
  }
],
// Gloves 2
caseRevolution: [
  {
    "weapon": "m4a4",
    "skin": "Temukau",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_cu_m4a4_temukau_light_large.a41eb80c70cbbee5d84e53b5cd1eaa10954c938d.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "ak47",
    "skin": "Head Shot",
    "quality": "covert",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ak47_cu_ak_head_shot_holo_light_large.85be84ba7c07917493b8e8a66c9d95c928ebe8b6.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "awp",
    "skin": "Duality",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_awp_gs_awp_limbo_snake_light_large.60984ce1e5c1a4ac10e83444a9b7e7f78dd98b1e.png",
    "wearMin": 0,
    "wearMax": 0.7
  },
  {
    "weapon": "ump45",
    "skin": "Wild Child",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_ump45_cu_ump_clutch_kick_light_large.b57e43c07b433517b1c3bdaa1e52ce44878af481.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "p2000",
    "skin": "Wicked Sick",
    "quality": "classified",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_hkp2000_cu_p2000_decline_light_large.7f57145674a5e41b3b8e7fe70be4ffbb57ec6f84.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "m4a1s",
    "skin": "Emphorosaur-S",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_m4a1_silencer_cu_m4a1s_feeding_frenzy_light_large.e1cb803e0e10ae4457e42d34ec8515b1500f4762.png",
    "wearMin": 0,
    "wearMax": 0.8
  },
  {
    "weapon": "p90",
    "skin": "Neoqueen",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p90_gs_p90_neoqueen_light_large.fa2a81f8c7906b2683b5eb4b562edd2529ad2cf0.png",
    "wearMin": 0,
    "wearMax": 0.6
  },
  {
    "weapon": "glock18",
    "skin": "Umbral Rabbit",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_glock_cu_glock_moon_rabbit_light_large.9063b9745250446c657632eb13a6325f51d101f2.png",
    "wearMin": 0,
    "wearMax": 0.75
  },
  {
    "weapon": "mac10",
    "skin": "Sakkaku",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mac10_cu_mac10_sakkaku_light_large.b590689d0ca099e8a759dd0a86da0710a58bca42.png",
    "wearMin": 0.21,
    "wearMax": 0.79
  },
  {
    "weapon": "r8",
    "skin": "Banana Cannon",
    "quality": "restricted",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_revolver_gs_r8_banana_light_large.50f0b729a36a405d48b41d58463234dbbd15b9cf.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mp9",
    "skin": "Featherweight",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp9_cu_mp9_superlight_light_large.81ad837f4c889f250fa03b227ef74555614de55d.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "sg553",
    "skin": "Cyberforce",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_sg556_cu_sg553_cyberforce_light_large.63aa4e611195d801eb706ac65d38df68f98e2b76.png",
    "wearMin": 0,
    "wearMax": 0.9
  },
  {
    "weapon": "mp5sd",
    "skin": "Liquidation",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mp5sd_cu_mp5sd_quick_liquidation_light_large.2b446c710928debe38469e33b3b9030bd218c0e3.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "mag7",
    "skin": "Insomnia",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_mag7_cu_mag7_insomnia_light_large.0d971fb17ca0bb1df7baed6a1caa902c56c1ea5b.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "tec9",
    "skin": "Rebel",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_tec9_cu_tec9_freedom_light_large.bb79585222a88d4dd3b154915c5527cac7e507d1.png",
    "wearMin": 0,
    "wearMax": 1
  },
  {
    "weapon": "scar20",
    "skin": "Fragments",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_scar20_gs_scar_fragments_black_light_large.d6bde287b06ba2380ba07621a0b06c36b13c4025.png",
    "wearMin": 0,
    "wearMax": 0.78
  },
  {
    "weapon": "p250",
    "skin": "Re.built",
    "quality": "milspec",
    "imgSrc": "https://steamcdn-a.akamaihd.net/apps/730/icons/econ/default_generated/weapon_p250_cu_p250_rebuilt_light_large.69d4fcb9a8151d09818d1c26cf4c7b03d046b5a1.png",
    "wearMin": 0,
    "wearMax": 0.9
  }
],
};
