import React from "react"
import ContentLoader from "react-content-loader"

const PizzaSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="120" r="120" /> 
    <rect x="0" y="260" rx="4" ry="4" width="280" height="25" /> 
    <rect x="0" y="300" rx="4" ry="4" width="280" height="75" /> 
    <rect x="10" y="410" rx="4" ry="4" width="88" height="30" /> 
    <rect x="145" y="405" rx="24" ry="24" width="130" height="45" />
  </ContentLoader>
)

export default PizzaSkeleton

