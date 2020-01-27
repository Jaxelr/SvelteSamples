import data from "./Data";

let highestNumOfAppearances = 0;

for (const region of data) {
  if (region.overallAppearances > highestNumOfAppearances) {
    highestNumOfAppearances = region.overallAppearances;
  }
}

const colorPalette = ["#38003c", "#2a404e", "#274c52", "#265053", "#255454", "#245956", "#226659","#1f735d", "#1c8060", "#198c64", "#169968", "#14a66b", "#11b26f", "#0ebf73", "#0bcc76", "#08d97a",
"#06e67e", "#03f281", "#00ff85"];

for (const region of data) {
  const index = Math.round(
    (region.overallAppearances / highestNumOfAppearances) * (colorPalette.length -1)
  )

  if (region.overallAppearances <= 0) {
    region.color = "rgba(51,51,51,0.5)";
  } else {
    region.color = colorPalette[index];
  }

}

const getRegionData = regionName => {
  return data.filter(region => region.name == regionName)[0];
}

export default getRegionData;