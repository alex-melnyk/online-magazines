import Bear0001Image from '../../assets/images/magazines/bear/0001.jpg';
import Bear0002Image from '../../assets/images/magazines/bear/0002.jpg';
import Bear0003Image from '../../assets/images/magazines/bear/0003.jpg';

import Donkey0001Image from '../../assets/images/magazines/donkey/0001.jpg';
import Donkey0002Image from '../../assets/images/magazines/donkey/0002.jpg';
import Donkey0003Image from '../../assets/images/magazines/donkey/0003.jpg';
import Donkey0004Image from '../../assets/images/magazines/donkey/0004.jpg';

import Turkey0001Image from '../../assets/images/magazines/turkey/0001.jpg';
import Turkey0002Image from '../../assets/images/magazines/turkey/0002.jpg';
import Turkey0003Image from '../../assets/images/magazines/turkey/0003.jpg';
import Turkey0004Image from '../../assets/images/magazines/turkey/0004.jpg';

export const GALLERY_TYPE_IMAGE = 'GALLERY_TYPE_IMAGE';
export const GALLERY_TYPE_VIDEO = 'GALLERY_TYPE_VIDEO';

const magazinesData = [
    {
        title: 'Aenean',
        content: 'Nullam sagittis, tellus vitae vehicula sodales, purus lorem feugiat turpis, efficitur semper nulla dolor ac lacus. Vivamus vehicula metus quis dictum imperdiet. Donec bibendum mauris sed ex mollis, a fringilla erat feugiat. Pellentesque sed lacus euismod dolor aliquet mattis. Aenean a est orci. Vivamus dictum, lectus ac tincidunt commodo, eros sapien sollicitudin diam, nec porta enim mi eu justo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce euismod lobortis fringilla. Aliquam erat volutpat. Etiam vitae tempus justo. Etiam eu lobortis nunc. Nullam rutrum, lorem sit amet fermentum pulvinar, tellus leo auctor orci, at consectetur purus metus id arcu. Suspendisse lacinia ante non sollicitudin vehicula. In hac habitasse platea dictumst.',
        gallery: {
            items: [
                {type: GALLERY_TYPE_IMAGE, source: Bear0001Image},
                {type: GALLERY_TYPE_IMAGE, source: Bear0002Image},
                {type: GALLERY_TYPE_IMAGE, source: Bear0003Image},
                // {type: GALLERY_TYPE_VIDEO, source: '2S4Khbv6iSw'},
            ]
        },
        location: {
            title: 'From London To NYC',
            place: 'London City Airport',
            from: 'LON',
            till: 'NYC'
        }
    },
    {
        title: 'Praesent',
        content: 'Ut sit amet facilisis lorem. Fusce fermentum, dui sit amet porttitor consectetur, mi diam vestibulum mi, sit amet facilisis enim ante et leo. Vivamus vel sollicitudin eros. Praesent vitae aliquam neque, at feugiat nulla. Donec placerat ligula sed fringilla fermentum. Sed vitae condimentum ex, eget luctus erat. Morbi elementum quis dolor id ullamcorper. Suspendisse convallis, elit in molestie aliquet, enim enim rhoncus ex, eu aliquam odio ante quis nisl. Aliquam efficitur nisl ex, venenatis sodales eros auctor eget. Sed sit amet ligula tristique, viverra turpis vitae, semper massa. Mauris magna purus, ultricies sit amet interdum nec, egestas in est. Curabitur eu quam faucibus, volutpat est ac, feugiat velit. Suspendisse eu ante ac ligula ultricies feugiat. Mauris eu velit consectetur enim molestie hendrerit eget in metus.',
        gallery: {
            items: [
                {type: GALLERY_TYPE_IMAGE, source: Donkey0001Image},
                {type: GALLERY_TYPE_IMAGE, source: Donkey0002Image},
                {type: GALLERY_TYPE_IMAGE, source: Donkey0003Image},
                {type: GALLERY_TYPE_IMAGE, source: Donkey0004Image}
            ]
        },
        location: {
            title: 'From London To NYC',
            place: 'London City Airport',
            from: 'LON',
            till: 'NYC'
        }
    },
    {
        title: 'Donec',
        content: 'Aenean placerat nisi tellus, eget semper leo dignissim quis. Sed accumsan eleifend nisl eget convallis. Integer iaculis in lorem nec ornare. Aliquam interdum sapien non erat cursus viverra. In ut velit nec lacus consectetur luctus nec mattis risus. Quisque laoreet convallis mi et luctus. Duis ac purus semper, mattis tortor in, lobortis dui. Mauris ac justo massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum molestie laoreet nunc ac varius. Integer ullamcorper interdum nisi vel hendrerit. Donec dolor risus, molestie nec rhoncus vel, dapibus et erat. Nulla purus ante, dictum sed vulputate ut, laoreet vitae dui. Pellentesque nec nulla quis dui vulputate ullamcorper. Nulla eu risus leo.',
        gallery: {
            items: [
                {type: GALLERY_TYPE_IMAGE, source: Turkey0001Image},
                {type: GALLERY_TYPE_IMAGE, source: Turkey0002Image},
                {type: GALLERY_TYPE_IMAGE, source: Turkey0003Image},
                {type: GALLERY_TYPE_IMAGE, source: Turkey0004Image}
            ]
        },
        location: {
            title: 'From London To NYC',
            place: 'London City Airport',
            from: 'LON',
            till: 'NYC'
        }
    }
];

export {magazinesData};