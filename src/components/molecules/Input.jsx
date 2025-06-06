import { useState } from 'react';
import { Text } from 'components/atoms/Text';
import {
  Input as ChakraInput,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

export const Input = (props) => {
  return (
    <>
      <ChakraInput
        w={['100%', '26rem']}
        h="3.5rem"
        fontSize="1rem"
        focusBorderColor="brand.primary"
        _placeholder={{ color: 'brand.grayDark' }}
        {...props}
      />
      {props.error && <Text color="red">{props.error}</Text>}
    </>
  );
};

Input.Password = ({ value, onChange, id, name, ...props }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <>
      <InputGroup
        size="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        {...props}
      >
        <Input
          onChange={onChange}
          value={value}
          id={id}
          name={name}
          pr="4.5rem"
          type={show ? 'text' : 'password'}
          placeholder="*************"
        />
        <InputRightElement width={['3.2rem', '3.5rem']} height="3.5rem">
          <Button
            display="flex"
            alignItems="center"
            justifyContent="center"
            w={['50%', '100%']}
            size="sm"
            bg="transparent"
            _hover={{ bg: 'transparent' }}
            onClick={handleClick}
          >
            {show ? (
              <ViewOffIcon
                boxSize="1.5rem"
                color="brand.primary"
                _hover={{ color: 'brand.primaryHover' }}
              />
            ) : (
              <ViewIcon
                boxSize="1.5rem"
                color="brand.primary"
                _hover={{ color: 'brand.primaryHover' }}
              />
            )}
          </Button>
        </InputRightElement>
      </InputGroup>
      {props.error && <Text color="red">{props.error}</Text>}
    </>
  );
};
