import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "news24", name: "News24" },
      author: "Nicole McCain",
      title:
        "Mahikeng exempt from load shedding after days of power outages - but only for 72 hours",
      description:
        "Mahikeng in the North West has received a 72-hour load shedding stay as businesses and consumers attempt to recover from more than 10 days without electricity.",
      url: "https://www.news24.com/news24/southafrica/news/mahikeng-exempt-from-load-shedding-after-days-of-power-outages-but-only-for-72-hours-20230511",
      urlToImage:
        "https://cdn.24.co.za/files/Cms/General/d/1781/c8f0d4e3630540679889b6cad17aea47.jpg",
      publishedAt: "2023-05-11T13:40:03+00:00",
      content:
        "<ul><li>Mahikeng has received a 72-hour exemption from load shedding.</li><li>The town has been without power for more than 10 days after an explosion at a substation.</li><li>An exemption was reques… [+2759 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Allison Morrow",
      title:
        "PacWest Bank shares fall 20% as crisis prompts customers to yank deposits | CNN Business",
      description:
        "Shares of PacWest Bancorp fell 20% in early trading Thursday after the regional bank reported that customers had recently drawn down about 9.5% of total deposits.",
      url: "https://www.cnn.com/2023/05/11/business/pacwest-banking-crisis/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230511083824-pacific-western-bank-230422.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-11T13:05:16Z",
      content:
        "Shares of PacWest Bancorp fell 20% in early trading Thursday after the regional bank reported that customers had recently drawn down about 9.5% of total deposits. \r\nPacWest is one of several mid-size… [+457 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Chris Isidore",
      title:
        "Bob Iger to Ron DeSantis: Does Florida want our jobs and taxes or not? | CNN Business",
      description:
        "Disney CEO Bob Iger said Florida Governor Ron DeSantis' attacks on the company threaten its plans for $17 billion of investment and 13,000 new jobs at Disney World over the next 10 years.",
      url: "https://www.cnn.com/2023/05/11/business/iger-desantis-disney-florida-feud/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230403143343-01-bob-iger-file.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-11T12:04:59Z",
      content:
        "Disney CEO Bob Iger said Florida Governor Ron DeSantis attacks on the company threaten its plans for $17 billion of investment and 13,000 new jobs at Disney World over the next 10 years. \r\nIn comment… [+3174 chars]",
    },
    {
      source: { id: "independent", name: "Independent" },
      author: "Jon Stone",
      title:
        "Commons Speaker blasts Kemi Badenoch over EU laws bonfire U-turn: ‘Who do you think you are speaking to?’",
      description:
        "Lindsay Hoyle enraged by business secretary’s response to criticism",
      url: "http://www.independent.co.uk/news/uk/politics/kemi-badenoch-speaker-brexit-eu-laws-b2336975.html",
      urlToImage:
        "https://static.independent.co.uk/2023/05/11/11/newFile-6.jpg?quality=75&width=1200&auto=webp",
      publishedAt: "2023-05-11T11:03:01Z",
      content:
        "Sign up to our free Brexit and beyond email for the latest headlines on what Brexit is meaning for the UK\r\nSign up to our Brexit email for the latest insight\r\nBusiness secretary Kemi Badenoch has rec… [+3344 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "",
      title:
        "Video: Expert predicts AI to hit children 'like a freight train' | CNN Business",
      description:
        'Jim Steyer, CEO and Founder of Common Sense Media, speaks to "CNN This Morning" about the potential downfalls of artificial intelligence and kids.',
      url: "https://www.cnn.com/videos/business/2023/05/10/artificial-intelligence-expert-danger-kids-ai-cnntm-vpx.cnn",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230510114255-jim-steyer-ai-expert.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-05-10T16:01:31Z",
      content: null,
    },
    {
      source: { id: "newsweek", name: "Newsweek" },
      author: "Mark Davis",
      title: "Newsweek",
      description:
        "Newsweek provides in-depth analysis, news and opinion about international issues, technology, business, culture and politics.",
      url: "https://www.newsweek.com/",
      urlToImage:
        "https://d.newsweek.com/en/full/2202468/special-presidential-envoy-climate-john-kerry.jpg",
      publishedAt: "2023-03-01T12:07:28.8517009Z",
      content: null,
    },
    {
      source: { id: "financial-post", name: "Financial Post" },
      author: "Financial Post",
      title: "Financial Post",
      description:
        "Stay up-to-date with the latest business trends and information on the Canadian economy, stock market and personal finance. Learn to save money, invest in the market, grow your wealth and advance your career with new skills.",
      url: "https://financialpost.com/category/personal-finance/business-essentials/",
      urlToImage:
        "https://dcs-static.gprod.postmedia.digital/12.2.3/websites/images/postmedia-image-fallback.png",
      publishedAt: "2022-11-13T00:37:35.7082248Z",
      content: null,
    },
  ];
  constructor() {
    super();
    console.log("this is a constructor from news component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsHunt - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description="my desc"
                  imageUrl={element.urlToImage}
                  newsUrl="TODO"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
