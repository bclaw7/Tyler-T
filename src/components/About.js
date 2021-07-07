import React, { Component } from 'react';
import rings from '../tree-rings.jpg';
import Title from './Title';

export class About extends Component {
  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${rings})`,
          backgroundSize: 'cover',
        }}>
        <Title name='about' title='tyler t.' />
        <div
          id='bio'
          className='container clearfix py-3
                '>
          <img
            src='img/tylert-profile.jpg'
            className='rounded col-md-6 float-md-end mb-3 ms-md-3'
            width='200px'
            alt='Tyler T. profile pic'
          />

          <p>
            Tyler T.’s music is energetic and unpredictable, intriguing and
            danceable, complex yet groovy. Innovative and eclectic, he creates a
            rich and textured sound by crossing and combining genres including
            acoustic rock, electric rock, folk, bluegrass, world, prog,
            psychedelic, and touches of jazz and electronica. Using a unique
            looping and phrase-sampling technique, he brings together a diverse
            roster of instruments such as guitar, keys, marimba, and didgeridoo,
            all of which he performs himself. He also often weaves in strings,
            mandolin, banjo, organ, saxophone, flute, and dobro to create a
            layered intricacy in his instrumental pieces, and a sense of texture
            that backs up his vocal performances.
          </p>
          <p>
            On acoustic guitar, he demonstrates a startling range of expression
            with harmonic and percussive techniques, while his voice whispers,
            rasps, grinds, and growls. According to Bandwagon Magazine, “He’s
            not only a world-class singer-songwriter in the folk/jam scene, but
            well versed in numerous instruments, making him a force to be
            reckoned with in progressive music as well.” Lyrically, he touches
            on eternal themes of love and loss, such as in the evocative “Stone
            Tree” and the wistful “Take Me With You.” What sets him apart is his
            ability to invoke folklore, such as in the tongue-and-cheek
            “Neanderthal Man.” He’s one of the rare songwriters who can convey
            the breadth of human experience with a sense of sincerity, as well
            as occasional irony and humor.
          </p>
          <p>
            Performing live, Tyler T. offers a captivating visual as well as
            auditory experience as he moves from instrument to instrument,
            recording loops and gradually layering musical elements to achieve a
            complex sound. In addition to his solo gigs, he fronts The Common
            Clay, a six-piece funk-folk band. He followed his first release, A
            World to Wander, with Wild Flower, which placed on the Colorado
            Playlist’s Top 40 Albums in May and June 2020, as well as on their
            Top 30 Albums in September, October, and December 2020.
          </p>
          <p>
            Originally from Texas, Tyler T. is based in Northern Colorado, where
            he’s played celebrated venues including the Aggie Theater, the
            Lyric, Casey Jones Music Fest, FoCoMX - Fort Collins Music
            Experiment, and NoCo Road Show. He has performed at the Launching
            Pad Live-streams and on the NoCo Live from Home Show and has
            performed live on KRFC FM, where he receives frequent airplay. His
            tour stops have included multiple venues in Tennessee, Texas,
            Wyoming, Arizona, New Mexico, and elsewhere. Visit tylertmusic.com
            to learn more.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
