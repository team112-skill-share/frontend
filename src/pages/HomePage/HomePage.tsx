import styles from "./HomePage.module.scss";
import cn from "classnames";

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.start}>
        <div className={styles.start_content}>
          <img
            src="/img/homepage/home-start-1.png"
            alt="woman sit at the table??????????????"
            className={styles.start_img}
          />

          <div className={styles.start_main}>
            <h1 className={styles.title}>
              Course search platform{" "}
              <span className={styles.title_company}>Skill Share</span>
            </h1>

            <div className={styles.search}>
              <div className={styles.search_input}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="Enter the name of the course or area of ​​interest here"
                />
                <button type="submit" className={styles.button} />
              </div>

              <ul className={styles.search_list}>
                <li className={styles.search_item}>All courses</li>
                <li className={styles.search_item}>Economic and Business </li>
                <li className={styles.search_item}>Foreign languages</li>
                <li className={styles.search_item}>Inclusivity</li>
                <li className={styles.search_item}>Civil Education</li>
                <li className={styles.search_item}>
                  Texnical Education and IT
                </li>
                <li className={styles.search_item}>Psychology and Medicine</li>
                <li className={styles.search_item}>
                  External Independent Evaluation
                </li>
                <li className={styles.search_item}>History</li>
                <li className={styles.search_item}>Culture</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.about_left}>
          <p className={styles.text}>
            Ukraine's largest aggregator of online courses. Our team carefully
            monitors all current offers on the market and does everything
            possible so that you can find the ideal option for yourself without
            extra effort.{" "}
            <span className={styles.text_company}>Skill Share</span> is open to
            anyone who wants to create and sell a course. It offers over 9,000
            courses on a variety of topics, making it one of the largest
            marketplaces for online learning. Strengths: It covers a broad range
            of skills, from technical subjects like programming to personal
            development and hobbies. Its flexible pricing and frequent discounts
            make courses accessible.
          </p>

          <button className={styles.button}>About us</button>
        </div>

        <img
          className={styles.about_img}
          src="/img/homepage/about-us.png"
          alt="about us"
        />
      </section>

      <section className={styles.statistics}>
        <div className={styles.statistics_content}>
          <div className={cn(styles.card, styles.card_1)}>
            <div className={cn(styles.card_logo, styles.card_logo_satisfied)} />
            <h3 className={styles.card_text}>Satisfied clients</h3>
            <span className={styles.card_num}>21096</span>
          </div>

          <div className={cn(styles.card, styles.card_2)}>
            <div className={cn(styles.card_logo, styles.card_logo_platform)} />
            <h3 className={styles.card_text}>Learning platforms</h3>
            <span className={styles.card_num}>279</span>
          </div>

          <div className={cn(styles.card, styles.card_3)}>
            <div className={cn(styles.card_logo, styles.card_logo_reviews)} />
            <h3 className={styles.card_text}>Real reviews</h3>
            <span className={styles.card_num}>11543</span>
          </div>

          <div className={cn(styles.card, styles.card_4)}>
            <div className={cn(styles.card_logo, styles.card_logo_courses)} />
            <h3 className={styles.card_text}>Courses</h3>
            <span className={styles.card_num}>9342</span>
          </div>
        </div>
      </section>

      <section className={styles.popular}>
        <div className={styles.popular_header}>
          <h3 className={styles.title}>Popular courses on Skill Share</h3>

          <div className={styles.arrows}>
            <button className={styles.arrows_left} />
            <button className={styles.arrows_right} />
          </div>
        </div>

        <div className={styles.popular_content}>
          <article className={styles.course}>
            <img
              className={styles.course_img}
              src="/img/homepage/eduquest.png"
              alt="eduquest"
            />

            <div className={styles.course_details}>
              <div className={styles.rating}>
                <div className={styles.stairs}>
                  <span className={styles.stairs_text}>4.72</span>
                  <div className={styles.stairs_block}>
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                  </div>
                </div>

                <div className={styles.comments}>
                  <div className={styles.comments_icon} />
                  <div className={styles.comments_count}>123</div>
                </div>
              </div>

              <button className={styles.countCourses}>
                <span className={styles.countCourses_text}>75 courses</span>
                <div className={styles.countCourses_arrow} />
              </button>
            </div>
          </article>

          <article className={styles.course}>
            <img
              className={styles.course_img}
              src="/img/homepage/eduquest.png"
              alt="eduquest"
            />

            <div className={styles.course_details}>
              <div className={styles.rating}>
                <div className={styles.stairs}>
                  <span className={styles.stairs_text}>4.72</span>
                  <div className={styles.stairs_block}>
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                  </div>
                </div>

                <div className={styles.comments}>
                  <div className={styles.comments_icon} />
                  <div className={styles.comments_count}>123</div>
                </div>
              </div>

              <button className={styles.countCourses}>
                <span className={styles.countCourses_text}>75 courses</span>
                <div className={styles.countCourses_arrow} />
              </button>
            </div>
          </article>

          <article className={styles.course}>
            <img
              className={styles.course_img}
              src="/img/homepage/eduquest.png"
              alt="eduquest"
            />

            <div className={styles.course_details}>
              <div className={styles.rating}>
                <div className={styles.stairs}>
                  <span className={styles.stairs_text}>4.72</span>
                  <div className={styles.stairs_block}>
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                  </div>
                </div>

                <div className={styles.comments}>
                  <div className={styles.comments_icon} />
                  <div className={styles.comments_count}>123</div>
                </div>
              </div>

              <button className={styles.countCourses}>
                <span className={styles.countCourses_text}>75 courses</span>
                <div className={styles.countCourses_arrow} />
              </button>
            </div>
          </article>

          <article className={styles.course}>
            <img
              className={styles.course_img}
              src="/img/homepage/eduquest.png"
              alt="eduquest"
            />

            <div className={styles.course_details}>
              <div className={styles.rating}>
                <div className={styles.stairs}>
                  <span className={styles.stairs_text}>4.72</span>
                  <div className={styles.stairs_block}>
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                  </div>
                </div>

                <div className={styles.comments}>
                  <div className={styles.comments_icon} />
                  <div className={styles.comments_count}>123</div>
                </div>
              </div>

              <button className={styles.countCourses}>
                <span className={styles.countCourses_text}>75 courses</span>
                <div className={styles.countCourses_arrow} />
              </button>
            </div>
          </article>

          <article className={styles.course}>
            <img
              className={styles.course_img}
              src="/img/homepage/eduquest.png"
              alt="eduquest"
            />

            <div className={styles.course_details}>
              <div className={styles.rating}>
                <div className={styles.stairs}>
                  <span className={styles.stairs_text}>4.72</span>
                  <div className={styles.stairs_block}>
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                  </div>
                </div>

                <div className={styles.comments}>
                  <div className={styles.comments_icon} />
                  <div className={styles.comments_count}>123</div>
                </div>
              </div>

              <button className={styles.countCourses}>
                <span className={styles.countCourses_text}>75 courses</span>
                <div className={styles.countCourses_arrow} />
              </button>
            </div>
          </article>

          <article className={styles.course}>
            <img
              className={styles.course_img}
              src="/img/homepage/eduquest.png"
              alt="eduquest"
            />

            <div className={styles.course_details}>
              <div className={styles.rating}>
                <div className={styles.stairs}>
                  <span className={styles.stairs_text}>4.72</span>
                  <div className={styles.stairs_block}>
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                    <div className={styles.star} />
                  </div>
                </div>

                <div className={styles.comments}>
                  <div className={styles.comments_icon} />
                  <div className={styles.comments_count}>123</div>
                </div>
              </div>

              <button className={styles.countCourses}>
                <span className={styles.countCourses_text}>75 courses</span>
                <div className={styles.countCourses_arrow} />
              </button>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.articles}>
        {/* make a component */}
        <div className={styles.header}>
          <h3 className={styles.title}>Recommended Articles</h3>
          {/* try to make a button */}
          <button className={styles.seeall}>
            <span className={styles.seeall_text}>See all</span>
            <div className={styles.seeall_arrow} />
          </button>
        </div>

        <div className={styles.content}>
          <article className={styles.article}>
            <img
              className={styles.article_img}
              src="/img/homepage/article.png"
              alt="article"
            />

            <div className={styles.article_text}>
              <h4 className={styles.article_text_title}>
                Profession of a cosmetologist. What skills and education are
                needed?
              </h4>
              <p className={styles.article_text_description}>
                The profession of a cosmetologist has gained significant
                popularity as people increasingly prioritize their appearance
                and skin health. Cosmetology combines science, medicine, and
                aesthetics, providing services ...
              </p>
            </div>
          </article>

          <article className={styles.article}>
            <img
              className={styles.article_img}
              src="/img/homepage/article-2.png"
              alt="article"
            />

            <div className={styles.article_text}>
              <h4 className={styles.article_text_title}>
                Why is IT worth going into it? pros and cons
              </h4>
              <p className={styles.article_text_description}>
                Choosing a career in IT (Information Technology) can be a
                rewarding decision for many reasons, but like any field, it
                comes with its own set of advantages and disadvantages. Let’s
                explore why IT is worth considering, along...
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className={styles.reviews}>
        {/* make a component */}
        <div className={styles.header}>
          <h3 className={styles.title}>Reviews of courses</h3>
          <button className={styles.seeall}>
            <span className={styles.seeall_text}>See all</span>
            <div className={styles.seeall_arrow} />
          </button>
        </div>

        <div className={styles.content}>
          <article className={styles.review}></article>
          <article className={styles.review}></article>
        </div>
      </section>
    </div>
  );
};
