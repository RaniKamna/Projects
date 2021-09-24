async function translate() {
  let res = await fetch("https://libretranslate.de/translate", {
    method: "POST",
    body: JSON.stringify({
      q: document.getElementById("box1").value,
      source: "en",
      target: document.getElementById(`language`).value,
    }),
    headers: { "Content-Type": "application/json" },
  });

  let data = await res.json();
  console.log(data)
  let { translatedText } = data;
  console.log(translatedText)
  showdet(translatedText)
}

function clickbtn() {
  let log = document.getElementById("box1");
  translate();
}

function showdet(data) {
  let trgt = document.getElementById(`box2`);
  trgt.value = data;
}