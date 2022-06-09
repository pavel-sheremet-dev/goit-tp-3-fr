import { StyledItem, StyledList, StyledDescriptionText, StyledStepText, StyledCreateText, StyledLibButton, StyledLibBox, StyledNameBook, StyledEmptyLibBox, StyledWrap, ArrowSvg, BookIcon, FlagIcon } from "./EmtpyLibraryText.styled";

import { useContext, useState } from "react";
import { PageFormatContext, format } from 'context/pageFormatContext';
import { useNavigate } from "react-router-dom";


export default function EmtpyLibraryText() {
    const [state, setState] = useState(false)
const pageFormat = useContext(PageFormatContext);
 const isResponse = pageFormat === format.response;
    const isMobile = pageFormat === format.mobile;
    let navigate = useNavigate();

  const goToLibrary = () => {
    navigate("/librarypage");
  };

    return (
        <>
            {(isResponse || isMobile ) &&
            <StyledNameBook>Назва книги</StyledNameBook>
            }
        <StyledEmptyLibBox>
        <StyledList>
            <StyledItem>
                        <StyledStepText >Крок 1.</StyledStepText>
                        <BookIcon></BookIcon>
                <StyledCreateText>Створіть особисту
                            бібліотеку</StyledCreateText>
                         <StyledWrap></StyledWrap>
                <ArrowSvg></ArrowSvg>
                <StyledDescriptionText>Додайте до неї книжки, які маєте намір прочитати.</StyledDescriptionText>
            </StyledItem>
            <StyledItem  marginTop="20px">
                <StyledStepText>Крок 2. </StyledStepText>
                <FlagIcon></FlagIcon>
                        <StyledCreateText>Сформуйте своє перше тренування</StyledCreateText>
                        <StyledWrap></StyledWrap>
                <ArrowSvg></ArrowSvg>
                        <StyledDescriptionText>Визначте ціль, оберіть період, розпочинайте тренування.</StyledDescriptionText> 
            </StyledItem>
            </StyledList>
            {(isMobile || isResponse) &&
                    <StyledLibBox>
                    <StyledLibButton onClick ={state}> Ок</StyledLibButton>
                    </StyledLibBox>
       }
            </StyledEmptyLibBox>
            </>
    )
}