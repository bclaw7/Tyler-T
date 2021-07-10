import React, { Component } from 'react';
import rings from '../tree-rings.jpg';
import Title from './Title';
import styled from 'styled-components';

export class About extends Component {
  render() {
    return (
      <Wrapper>
        <div
          className='bio'
          style={{
            backgroundImage: `url(${rings})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>
          <Title name='tyler' title='t.' />
          <div
            id='bio'
            className='container clearfix py-3
                '>
            <img
              src='img/tylert-profile.jpg'
              className='profile rounded col-md-6 float-md-end mb-3 ms-md-3'
              width='200px'
              alt='Tyler T. profile pic'
            />

            <p className='lead'>
              Tyler T.’s music is energetic and unpredictable, intriguing and
              danceable, complex yet groovy. Innovative and eclectic, he creates
              a rich and textured sound by crossing and combining genres
              including acoustic rock, electric rock, folk, bluegrass, world,
              prog, psychedelic, and touches of jazz and electronica. Using a
              unique looping and phrase-sampling technique, he brings together a
              diverse roster of instruments such as guitar, keys, marimba, and
              didgeridoo, all of which he performs himself. He also often weaves
              in strings, mandolin, banjo, organ, saxophone, flute, and dobro to
              create a layered intricacy in his instrumental pieces, and a sense
              of texture that backs up his vocal performances.
            </p>
            <p>
              On acoustic guitar, he demonstrates a startling range of
              expression with harmonic and percussive techniques, while his
              voice whispers, rasps, grinds, and growls. According to Bandwagon
              Magazine, “He’s not only a world-class singer-songwriter in the
              folk/jam scene, but well versed in numerous instruments, making
              him a force to be reckoned with in progressive music as well.”
              Lyrically, he touches on eternal themes of love and loss, such as
              in the evocative “Stone Tree” and the wistful “Take Me With You.”
              What sets him apart is his ability to invoke folklore, such as in
              the tongue-and-cheek “Neanderthal Man.” He’s one of the rare
              songwriters who can convey the breadth of human experience with a
              sense of sincerity, as well as occasional irony and humor.
            </p>
            <p>
              Performing live, Tyler T. offers a captivating visual as well as
              auditory experience as he moves from instrument to instrument,
              recording loops and gradually layering musical elements to achieve
              a complex sound. In addition to his solo gigs, he fronts The
              Common Clay, a six-piece funk-folk band. He followed his first
              release, A World to Wander, with Wild Flower, which placed on the
              Colorado Playlist’s Top 40 Albums in May and June 2020, as well as
              on their Top 30 Albums in September, October, and December 2020.
            </p>
            <p>
              Originally from Texas, Tyler T. is based in Northern Colorado,
              where he’s played celebrated venues including the Aggie Theater,
              the Lyric, Casey Jones Music Fest, FoCoMX - Fort Collins Music
              Experiment, and NoCo Road Show. He has performed at the Launching
              Pad Live-streams and on the NoCo Live from Home Show and has
              performed live on KRFC FM, where he receives frequent airplay. His
              tour stops have included multiple venues in Tennessee, Texas,
              Wyoming, Arizona, New Mexico, and elsewhere. Visit tylertmusic.com
              to learn more.
            </p>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default About;

const Wrapper = styled.div`
  #bio {
    color: greenyellow;
  }
  .profile:hover {
    /* Start the shake animation and make the animation last for 0.5 seconds */
    animation: shake 0.5s;

    /* When the animation is finished, start again */
    animation-iteration-count: infinite;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;
