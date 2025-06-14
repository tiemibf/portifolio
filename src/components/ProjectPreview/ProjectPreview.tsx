import { ProjectPreviewStyled } from "./styles";

export const ProjectPreview: React.FC<{ image?: string; alt?: string, href?: string }> = ({ image, alt, href }) => (
    <ProjectPreviewStyled onClick={() => window.open(href, '_blank')}>
        {image ? (
            <img
                src={image}
                alt={alt || 'Project preview'}
            />) : null}
    </ProjectPreviewStyled>
);