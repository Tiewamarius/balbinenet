import { Link } from "react-router-dom";

const posts = [
    { image: "1.png", title: "How to cleanroom yourself" },
    { image: "2.png", title: "Enjoy the working time" },
    { image: "3.png", title: "Self cleaning is the best drill" },
    { image: "1.png", title: "How to cleanroom yourself" },
    { image: "2.png", title: "Enjoy the working time" },
    { image: "3.png", title: "Self cleaning is the best drill" },
    { image: "1.png", title: "How to cleanroom yourself" },
    { image: "2.png", title: "Enjoy the working time" },
    { image: "3.png", title: "Self cleaning is the best drill" },
];

export default function BlogSection() {
    return (
        <section className="blog-section pt-100">
            <div className="container">
                <div className="section-head text-center">
                    <h2>Latest <span>Blogs</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor contratc ut labore et dolore magna aliqua.
                    </p>
                </div>

                {/* Les classes Owl sont conservées pour le CSS du template.
                    Le carrousel doit être initialisé si vous souhaitez l'animation Owl. */}
                <div className="blog-slider owl-carousel owl-theme">
                    {posts.map((post, index) => (
                        <article className="blog-area" key={`${post.image}-${index}`}>
                            <div className="blog-img">
                                <Link to="/blog-details">
                                    <img
                                        src={`/assets/img/blog/${post.image}`}
                                        alt={post.title}
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div className="blog-text">
                                <h4><Link to="/blog-details">{post.title}</Link></h4>
                                <ul>
                                    <li><i className="icofont-calendar" /> 20 Feb 2026</li>
                                    <li>
                                        <i className="icofont-ui-user" />
                                        <span>John Doe</span>
                                    </li>
                                </ul>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor contratc ut labore.
                                </p>
                                <Link to="/blog-details" className="blog-btn">
                                    Read more <i className="icofont-rounded-right" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
