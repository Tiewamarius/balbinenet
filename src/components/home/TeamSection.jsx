const team = [
    { image: "1.png", name: "John Smith", role: "Head of Cleaner" },
    { image: "2.png", name: "Marry", role: "Cleaner" },
    { image: "3.png", name: "John Smith", role: "Office Cleaner" },
    { image: "4.png", name: "Eve", role: "Assistant" },
];

const socialLinks = [
    { label: "Facebook", icon: "icofont-facebook", url: "https://www.facebook.com/" },
    { label: "Twitter", icon: "icofont-twitter", url: "https://www.twitter.com/" },
    { label: "LinkedIn", icon: "icofont-linkedin", url: "https://www.linkedin.com/" },
    { label: "Instagram", icon: "icofont-instagram", url: "https://www.instagram.com/" },
];

export default function TeamSection() {
    return (
        <section className="team-section pt-100 pb-70">
            <div className="container">
                <div className="section-head text-center">
                    <h2>Our <span>Team Members</span></h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor contratc ut labore et dolore magna aliqua.
                    </p>
                </div>

                <div className="row">
                    {team.map((member) => (
                        <div className="col-lg-3 col-md-6 col-sm-6" key={member.image}>
                            <div className="team-card">
                                <div className="team-img">
                                    <img
                                        src={`/assets/img/team/${member.image}`}
                                        alt={member.name}
                                        loading="lazy"
                                    />
                                    <div className="team-social">
                                        {socialLinks.map((social) => (
                                            <a
                                                key={social.label}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label={social.label}
                                            >
                                                <i className={social.icon} />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="team-text">
                                    <h4>{member.name}</h4>
                                    <p>{member.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
