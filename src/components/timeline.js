import React from 'react';

const timeline = () => {
  return (
    <div>
      <section className='colorlib-experience' data-section='timeline'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>highlights</span>
              <h2 className='colorlib-heading animate-box'>Timeline</h2>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className='timeline-centered'>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon'>
                      <img
                        src='images/semtr.png'
                        alt='semtr'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        Digital Marketing Specialist, SEM TR Agency{' '}
                        <span> July 2020 - Present</span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon'>
                      <img
                        src='images/benzinlitre-ico.png'
                        alt='benzinlitre'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        Product Manager, BenzinLitre{' '}
                        <span>February 2018 - Present</span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInTop'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon '>
                      <img
                        src='images/m2l.png'
                        alt='m2l'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        Account Executive, Minds2Lead{' '}
                        <span>February 2020 - June 2020 </span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon'>
                      <img
                        src='images/hepsiburada.png'
                        alt='hepsiburada'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        Performance Marketing Intern, Hepsiburada{' '}
                        <span>December 2019 - February 2020</span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>
                <article
                  className='timeline-entry animate-box'
                  data-animate-effect='fadeInLeft'
                >
                  <div className='timeline-entry-inner'>
                    <div className='timeline-icon'>
                      <img
                        src='images/altincicadde.jpg'
                        alt='altincicadde'
                        className='brand_logo'
                      />
                    </div>
                    <div className='timeline-label'>
                      <h2>
                        Marketing Intern, Altıncı Cadde{' '}
                        <span>July 2018 - June 2019</span>
                      </h2>
                      <p></p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default timeline;
