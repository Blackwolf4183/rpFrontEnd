import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

import { useRef } from 'react';

function AlertRedirectFivem({ open, onCloseAlert }) {
  const cancelRef = useRef();

  const handleRedirect = () => {
    onCloseAlert();
    var newWindow = window.open('', '_self');
    newWindow.location.href = 'fivem://connect/cfx.re/join/k35yy6';
  };

  return (
    <AlertDialog
      isOpen={open}
      leastDestructiveRef={cancelRef}
      onClose={onCloseAlert}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Redireccionamiento a Fivem
          </AlertDialogHeader>

          <AlertDialogBody>
            Haz Click en <b>Ok</b> y posteriormente en <b>Abrir FiveM</b> si deseas abrir tu launcher de fivem para acceder a
            nuestro servidor.
          </AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} colorScheme="red" onClick={onCloseAlert}>
              Cancelar
            </Button>
            <Button colorScheme="green" onClick={handleRedirect} ml={3}>
              Ok
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
export default AlertRedirectFivem;
