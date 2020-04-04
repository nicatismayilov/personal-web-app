import React from 'react';

import AboutItem from '../about-item/about-item.component';

class About extends React.Component {
    constructor() {
        super();

        this.state = {
            abouts: [
                {
                    id: 1,
                    date: 1970,
                    content: 'sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra accumsan in nisl'
                },
                {
                    id: 2,
                    date: 1980,
                    content: 'sed enim ut sem viverra aliquet eget sit amet tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros in cursus turpis'
                },
                {
                    id: 3,
                    date: 1990,
                    content: 'cras pulvinar mattis nunc sed blandit libero volutpat sed cras'
                },
                {
                    id: 4,
                    date: 2000,
                    content: 'est ultricies integer quis auctor elit sed vulputate mi sit amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum varius sit amet mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat semper viverra nam libero'
                }
            ]
        }
    }

    render() {
        const { abouts } = this.state;
        return (
            <section className="about main">
                <h2 className="heading-primary">haqqımda</h2>

                <main className="about__content col-md-10">
                    {
                        abouts.map(({ id, ...otherAboutProps }) => 
                            <AboutItem key={id} {...otherAboutProps} />
                        )
                    }
                </main>
            </section>
        )
    }
}

export default About;