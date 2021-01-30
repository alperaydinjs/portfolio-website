import React from 'react';

const projects = () => {
  return (
    <div>
      <section className='colorlib-work' data-section='projects'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>My Work</span>
              <h2 className='colorlib-heading animate-box'>Recent Projects</h2>
            </div>
          </div>
          <div className='row'>
            <div className='row animate-box' data-animate-effect='fadeInLeft'>
              <div className='col-md-5'>
                <img
                  className='project'
                  src='images/benzinlitre.png'
                  alt='benzinlitre'
                />
                <div className='website text-center'>
                  <p>
                    <a
                      className='btn btn-primary btn-learn'
                      href='https://www.benzinlitre.com/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      View
                    </a>
                  </p>
                </div>
              </div>
              <div className='col-md-7'>
                <div className=''>
                  <div className=''>
                    <div className=''>
                      <h2>Benzin Litre</h2>
                      <h3>Mobile Application</h3>
                      <p>
                        BenzinLitre is a crowdsourcing app platform, enables its
                        users to find right fuel, park areas and great road
                        experience!
                      </p>
                      <div className='my-flex tech'>
                        <div className='desc'>
                          <a href='https://apps.apple.com/tr/app/benzinlitre/id1338181124?l=tr'>
                            <img
                              src='images/app-store.png'
                              alt='app store'
                              className='store-button'
                            />
                          </a>
                        </div>
                        <div className='desc'>
                          <a href='https://play.google.com/store/apps/details?id=com.benzinlitre.app&hl=tr&gl=US'>
                            <img
                              src='images/play-store.png'
                              alt='play store'
                              className='store-button'
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default projects;
