import React from 'react';
import Config from "../../Config";

export default class BirdLife extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="w-100 h-100 container overflow-auto">
                <div className="row my-4">
                    <div className="col-12 col-md-6 ml-auto">
                        <img src={Config.imgFolder + "/birdlife.png"}
                             alt="Biodi-vers-City" className="img-fluid my-4"/>
                    </div>
                </div>
                <div className="row my-4">
                    <div className="col-12 col-md-6">
                        <h2>Premier paragraphe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus lacinia facilisis.
                            Donec quis faucibus dui, a accumsan odio. Morbi et lacus vitae diam efficitur mollis. Nunc a
                            urna erat. Nunc porta turpis id congue luctus. Nunc lobortis mauris sed neque aliquet
                            egestas. Curabitur at eros quis elit euismod euismod id sed velit. Mauris pellentesque in
                            elit eget imperdiet. Maecenas dictum molestie ipsum, in pharetra risus pretium quis.
                            Suspendisse at enim augue. Etiam lacinia tortor ex. Ut convallis cursus dictum. Donec
                            dapibus risus sit amet magna cursus, sit amet varius est interdum. </p>
                        <p>Mauris quis rhoncus leo. Vestibulum egestas posuere pulvinar. Aliquam pulvinar pulvinar
                            purus, vel egestas dui dignissim in. Mauris egestas leo quis orci accumsan, in imperdiet
                            risus posuere. In hac habitasse platea dictumst. Proin lorem felis, porta a semper in,
                            egestas et mauris. Proin lectus eros, pretium at sapien non, pretium ultricies nunc. Sed ac
                            sollicitudin mi, nec mattis justo. Vestibulum ut dictum nibh, ut commodo arcu. Ut at enim
                            ante. Duis consequat nunc ipsum, vel convallis leo malesuada nec. Nam sed hendrerit est.
                            Nulla magna eros, fringilla eu pretium vel, placerat at erat. </p>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Deuxième paragraphe</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce maximus lacinia facilisis.
                            Donec quis faucibus dui, a accumsan odio. Morbi et lacus vitae diam efficitur mollis. Nunc a
                            urna erat. Nunc porta turpis id congue luctus. Nunc lobortis mauris sed neque aliquet
                            egestas. Curabitur at eros quis elit euismod euismod id sed velit. Mauris pellentesque in
                            elit eget imperdiet. Maecenas dictum molestie ipsum, in pharetra risus pretium quis.
                            Suspendisse at enim augue. Etiam lacinia tortor ex. Ut convallis cursus dictum. Donec
                            dapibus risus sit amet magna cursus, sit amet varius est interdum. </p>
                        <p>Mauris quis rhoncus leo. Vestibulum egestas posuere pulvinar. Aliquam pulvinar pulvinar
                            purus, vel egestas dui dignissim in. Mauris egestas leo quis orci accumsan, in imperdiet
                            risus posuere. In hac habitasse platea dictumst. Proin lorem felis, porta a semper in,
                            egestas et mauris. Proin lectus eros, pretium at sapien non, pretium ultricies nunc. Sed ac
                            sollicitudin mi, nec mattis justo. Vestibulum ut dictum nibh, ut commodo arcu. Ut at enim
                            ante. Duis consequat nunc ipsum, vel convallis leo malesuada nec. Nam sed hendrerit est.
                            Nulla magna eros, fringilla eu pretium vel, placerat at erat. </p>
                    </div>
                </div>
            </div>
        );
    }
}
