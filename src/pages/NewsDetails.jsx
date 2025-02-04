import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import Rightbar from "../components/layout-components/Rightbar";

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div className="w-11/12 mx-auto">
      <header>
        <Header></Header>
      </header>
      <main className="grid grid-cols-12 gap-5">
        <section className="col-span-9">
          <h2 className="font-semibold mb-5">Dragon News</h2>

          <div className="card bg-base-100  border-2">
            <figure className="px-10 pt-10">
              <img
                src={news?.image_url}
                alt={news.title}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link to={`/category/${news?.category_id}`} className="btn btn-primary">Back to category</Link>
              </div>
            </div>
          </div>

        </section>
        <aside className="col-span-3">
          <Rightbar></Rightbar>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
