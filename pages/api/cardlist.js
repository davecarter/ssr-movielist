// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const card = {
  id: 139,
  url: "http://www.tvmaze.com/shows/139/girls",
  name: "Girls",
  officialSite: "http://www.hbo.com/girls",
  rating: {
    average: 6.7
  },
  image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/31/78286.jpg"
  },
  summary: "<p>This Emmy winning series is a comic look at the assorted humiliations and rare triumphs of a group of girls in their 20s.</p>"
}

export default (req, res) => {
  res.statusCode = 200
  res.json(card)
}
