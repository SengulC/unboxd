'use client'

export default function Home() {
  return (
    <div>
    <map name="foodmap">
      <area alt="drink" title="drink" href="google.com" coords="462,292,486,335" shape="rect"/>
      <area alt="cookies" title="cookies" href="google.com" coords="572,323,19" shape="circle"/>
      <area alt="curry" title="curry" href="google.com" coords="882,267,22" shape="circle"/>
    </map>
      <img useMap="#foodmap" className="home" src="home.jpg"></img>
    </div>
);
}
