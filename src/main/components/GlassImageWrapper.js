import { Flex, Grid } from '@chakra-ui/react';
import bgPic from '../../assets/background.jpg'

export const GlassImageWrapper = props => {
  return (
    //Image
    <Flex
      height="100vh"
      min-height="688"
      width="100vw"
      backgroundSize="cover"
      /* bgImage={"url(https://www.xtrafondos.com/en/descargar.php?id=3229&resolucion=2560x1440)"} */
      bgImage={bgPic}
      backgroundPosition="center center"
    >
      {/*Crystal blur */}
      <Flex
        width="100vw"
        background={props.bgC || "rgba( 255, 255, 255, 0.05 )"}
        boxShadow="0 8px 32px 0 rgba( 31, 38, 135, 0.37 )"
        backdropFilter={props.bgB || "blur( 2px )"}
      >
        {/* Border around content */}
        <Grid
          className="mainGrid"
          templateColumns={props.gridLayout}
          overflow="hidden"
          overflowY="scroll" /* TODO: cuidado con esto vaya a romper la pagina */
          borderWidth="1.5px"
          margin="20px" 
          borderColor="border"
          width="100vw"
        >
          {props.children}
        </Grid>
      </Flex>
    </Flex>
  );
};
