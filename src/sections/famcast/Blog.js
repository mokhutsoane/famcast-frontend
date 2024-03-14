import React from "react";
import moment from "moment";
import Link from "../../../src/components/Link";

export default function Blog({ homenews }) {
  return (
    <div className="blog-home2 py-20">
      <div className="container">
        {homenews && homenews.length > 0 ? (
          <div className="row mt-4">
            {homenews.map((items) => {
              return (
                <div className="col-md-4 on-hover" key={items.id}>
                  <div className="card border-0 mb-4">
                    <Link to={`/blog/${items.slug}`}>
                      <img
                        className="card-img-top"
                        src={
                          items._embedded["wp:featuredmedia"][0].media_details
                            ? items._embedded["wp:featuredmedia"][0]
                                .media_details.sizes.medium.source_url
                            : "/q/image/blog2.jpg"
                        }
                        alt={items.title.rendered}
                      />
                    </Link>
                    <div className="date-pos bg-info-gradiant p-2 d-inline-block text-center rounded text-yellow position-absolute">
                      {moment(items.date).format("MMM")}
                      <span className="d-block">
                        {moment(items.date).format("DD")}
                      </span>
                    </div>

                    <Link to={`/blog/${items.slug}`}>
                      <h5 className=" mt-3  gr-text-8">
                        {items.title.rendered}
                      </h5>
                    </Link>
                    <div
                      className="mt-3"
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        lineClamp: 2,
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                      }}
                      dangerouslySetInnerHTML={{
                        __html: items.excerpt.rendered,
                      }}
                    ></div>

                    <Link to={`/blog/${items.slug}`}>
                      <p className="text-decoration-none linking text-themecolor mt-2">
                        Read more
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <p>No News at the moment, Please check again later</p>
          </div>
        )}
      </div>
    </div>
  );
}
