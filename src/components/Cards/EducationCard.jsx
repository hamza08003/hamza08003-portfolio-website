import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Document = styled.img`
    display: none;
    height: 70px;
    width: fit-content;
    background-color: #000;
    border-radius: 10px;
    &:hover{
        cursor: pointer;
        opacity: 0.8;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: ${({ isExpanded }) => (isExpanded ? 'visible' : 'hidden')};
display: -webkit-box;
max-width: 100%;
-webkit-line-clamp: ${({ isExpanded }) => (isExpanded ? 'unset' : '4')};
-webkit-box-orient: vertical;
text-overflow: ellipsis;
text-align: justify;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px rgba(0,0,0,0.2);
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }

    &:hover ${Document}{
        display: flex;
    }

    border: 0.1px solid #854CE6;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`


const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Degree = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Grade = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const ReadMoreButton = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.primary};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    padding: 0;
    margin-top: 8px;
    margin-bottom: 12px;
    display: block;
    &:hover {
        text-decoration: underline;
    }
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const EducationCard = ({ education }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showButton, setShowButton] = useState(false);
    const textRef = useRef(null);

    useEffect(() => {
        if (textRef.current) {
            // Check if text is truncated without affecting the expanded state
            const checkTruncation = () => {
                // Create a clone for measurement to avoid affecting the actual displayed content
                const clone = textRef.current.cloneNode(true);
                clone.style.visibility = 'hidden';
                clone.style.position = 'absolute';
                clone.style.width = getComputedStyle(textRef.current).width;
                // Reset expanded properties for measurement
                clone.style.webkitLineClamp = '4';
                clone.style.overflow = 'hidden';
                document.body.appendChild(clone);
                
                // Check if content would be truncated in collapsed state
                const isTruncated = clone.scrollHeight > clone.clientHeight;
                
                // Clean up
                document.body.removeChild(clone);
                setShowButton(isTruncated);
            };
            
            checkTruncation();
            window.addEventListener('resize', checkTruncation);
            
            return () => {
                window.removeEventListener('resize', checkTruncation);
            };
        }
    }, [education?.desc]); // Remove isExpanded from dependencies

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <Card>
            <Top>
                <Image src={education.img} />
                <Body>
                    <Name>{education.school}</Name>
                    <Degree>{education.degree}</Degree>
                    <Date>{education.date}</Date>
                </Body>
            </Top>
            <Grade><b>Grade: </b>{education.grade}</Grade>
            <Description>
                <Span ref={textRef} isExpanded={isExpanded}>{education.desc}</Span>
                {showButton && (
                    <ReadMoreButton onClick={toggleExpand}>
                        {isExpanded ? 'Read Less' : 'Read More'}
                    </ReadMoreButton>
                )}
            </Description>
        </Card>
    )
}

export default EducationCard