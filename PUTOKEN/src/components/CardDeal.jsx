import { about } from "../assets";
import styles, { layout } from "../style";

const CardDeal = () => {
  return (
    <section
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className={layout.section1}
    >
      <div className={`${layout.sectionInfo} flex-1`}>
        <h2
          className={`${styles.heading2} pb-4 max-w-[470px] font-normal text-gradient`}
        >
          Token's Utility
        </h2>

        <h2 className={`${styles.paragraph}`}>
          Utilities in cryptocurrency are general problems which tokens solves,
          benefits accrued to crypto users in the ecosystem. People utility
          token as a utility asset will be proof- of-stake, where holders can
          stake the token for a period of time and earn rewards of stake. The
          systemic plan is that annual stake of above 5million PUT will attract
          annual reward 10% PUT, Another utility of People utility token(PUT) is
          the envisioned creation of a multi chain blockchain on which people
          utility token will sit.
        </h2>
      </div>
      <div className={`${layout.sectionImg} flex-1`}>
        <img src={about} alt="" className="w-[70%] h-[100%] relative z-[10] cursor-pointer" />

        {/* gradient start */}
        <div className="absolute z-[1] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[70%] h-[50%] right-20 bottom-20 blue__gradient1" />
        {/* gradient end */}
      </div>
    </section>
  );
};
export default CardDeal;
