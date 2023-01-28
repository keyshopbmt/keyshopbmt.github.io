import React from 'react';
import { FacebookEmbed } from 'react-social-media-embed';

export default function News() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
    <FacebookEmbed url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftienphatexpertkeyworld&tabs=timeline&width=1110&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width={1100} />
  </div>
  )
}
