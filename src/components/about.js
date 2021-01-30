import React from 'react';

const about = () => {
  return (
    <div>
      <section className='colorlib-about' data-section='about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div className='col-md-12'>
              <div
                className='row row-bottom-padded-sm animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div className='col-md-12'>
                  <div className='about-desc'>
                    <span className='heading-meta'>About Us</span>
                    <h2 className='colorlib-heading'>Who Am I?</h2>
                    <p>Digital Marketer @SEM, Family Member @BenzinLitre. </p>
                    <p>
                      If you’re interested in grabbing coffee and talking shop
                      (or to hear my story), please send an email my way.
                    </p>
                    <p>
                      <span>Competencies:</span> Facebook Ads, SEO, Google
                      Analytics, Media Buying, Media Planning, Assisting PPC
                      activities while implementing marketing strategies to
                      increase sales and revenue{' '}
                    </p>
                  </div>
                  <div className='my-flex'>
                    <div className='desc'>
                      <p>
                        <a
                          className='btn btn-primary btn-learn'
                          href='https://drive.google.com/file/d/1X5jxx6i3Uu8r82OyAfKJwDHKisdnLPHF/view?usp=sharing'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          View CV <i className='icon-download4' />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='colorlib-about'>
        <div className='colorlib-narrow-content'>
          <div className='row'>
            <div
              className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
              data-animate-effect='fadeInLeft'
            >
              <span className='heading-meta'>What I do?</span>
              <h2 className='colorlib-heading'>
                Here are some of my expertise
              </h2>
            </div>
          </div>
          <div className='row row-pt-md'>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-1'>
                <span className='icon'>
                  <i className='icon-code' />
                </span>
                <div className='desc'>
                  <h3>Social Media Advertising</h3>
                  <p>
                    Developing marketing strategy and plan for clients,
                    especially on Facebook Ads{' '}
                  </p>
                  <p>
                    Create, Run and Optimization Branding, Consideration and
                    Conversion Campaigns{' '}
                  </p>
                  <p>Campaign based Reporting </p>
                  <p>Lift Studies, A/B Testings on Facebook </p>
                  <p>Tiktok, Twitter and Linkedin Ads </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-3'>
                <span className='icon'>
                  <i className='icon-spanner' />
                </span>
                <div className='desc'>
                  <h3>App Marketing</h3>
                  <p>
                    Guerilla Marketing Activities, SEO and Web Developments, App
                    and Web Analytics, App Download
                  </p>

                  <p>Campaigns on Online Platforms see more at</p>
                  <p>
                    <a
                      href='https://www.benzinlitre.com/'
                      target='_blank'
                      className='link-benzin'
                    >
                      www.benzinlitre.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-4 text-center animate-box'>
              <div className='services color-5'>
                <span className='icon'>
                  <i className='icon-zoom-outline' />
                </span>
                <div className='desc'>
                  <h3>Product</h3>
                  <p>
                    Identifying the customer need and the larger business
                    objectives that a product or feature will fulfill,
                    articulating what success looks like for a product, and
                    ralling a team to turn that vision into a reality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default about;
