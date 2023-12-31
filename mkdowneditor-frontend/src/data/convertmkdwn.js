export const convertMkdwnDataCall = async (markdownData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    text: markdownData,
  });
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const result = await fetch(
    "http://localhost:8000/api/convertmkdwn",
    requestOptions
  );
  return result.json();
};
