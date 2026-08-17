import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import MediaImage from "../components/MediaImage";
import SectionHeading from "../components/SectionHeading";
import { copy } from "../copy/de";
import { media } from "../config/media";
import { restaurant } from "../config/restaurant";

const teamImages = [media.teamChristian, media.teamMaribel, media.teamOctavio];

const AboutPage = () => (
  <>
    <SEO title={copy.seo.about.title} description={copy.seo.about.desc} path="/ueber-uns" />

    <section className="relative flex min-h-[62svh] items-end overflow-hidden bg-deep" data-testid="about-hero">
      <div className="absolute inset-0">
        <img src={media.story.src} alt={media.story.alt} style={{ objectPosition: media.story.position }} className="h-full w-full object-cover" />
      </div>
      <div className="absolute inset-0 bg-deep/60" aria-hidden="true" />
      <div className="container-site relative pb-16 pt-44 text-ivory sm:pb-20">
        <Reveal>
          <h1 className="headline-serif max-w-3xl text-4xl sm:text-6xl">{copy.aboutPage.heroHeadline}</h1>
        </Reveal>
        <Reveal delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ivory/80 sm:text-lg">{copy.aboutPage.intro}</p>
        </Reveal>
      </div>
    </section>

    <main data-testid="about-content">
      <section className="py-24 sm:py-32">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <SectionHeading title={copy.aboutPage.philosophyHeadline} copy={copy.aboutPage.philosophyCopy} />
          <Reveal delay={0.12}>
            <MediaImage image={media.atmospherePrimary} ratio="aspect-[3/2]" className="rounded-sm" sizes="(max-width: 1024px) 100vw, 45vw" />
          </Reveal>
        </div>
      </section>

      <section className="bg-sand/30 py-24 sm:py-32">
        <div className="container-site">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
            <div className="order-2 lg:order-1">
              <SectionHeading title={copy.aboutPage.fusionHeadline} copy={copy.aboutPage.fusionCopy} />
            </div>
            <div className="order-1 grid grid-cols-2 items-start gap-5 lg:order-2">
              <Reveal>
                <MediaImage image={media.worldKitchen} ratio="aspect-[4/5]" className="rounded-sm" />
              </Reveal>
              <Reveal delay={0.12} className="mt-10">
                <MediaImage image={media.caribbeanPrimary} ratio="aspect-[4/5]" className="rounded-sm" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32" data-testid="team-section">
        <div className="container-site">
          <SectionHeading eyebrow={copy.aboutPage.teamEyebrow} title={copy.aboutPage.teamHeadline} />
          <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
            {copy.aboutPage.team.map((member, i) => (
              <Reveal key={member.name} delay={i * 0.1}>
                <article data-testid={`team-member-${i}`} className="group">
                  <div className="relative overflow-hidden rounded-sm">
                    <MediaImage
                      image={teamImages[i]}
                      ratio="aspect-[4/5]"
                      sizes="(max-width: 640px) 100vw, 31vw"
                      imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <h3 className="headline-serif mt-5 text-2xl text-ink">{member.name}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-ocean">{member.role}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep py-20 text-center text-ivory sm:py-24">
        <div className="container-site">
          <Reveal>
            <p className="font-serif text-3xl font-semibold italic sm:text-4xl">«{restaurant.brandLine}»</p>
          </Reveal>
          <Reveal delay={0.12} className="mt-8">
            <a href={restaurant.reservationUrl} target="_blank" rel="noopener noreferrer" data-testid="about-reserve-cta" className="btn-primary !bg-ivory !text-deep hover:!bg-ocean hover:!text-ivory">
              {copy.nav.reserve}
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  </>
);

export default AboutPage;
