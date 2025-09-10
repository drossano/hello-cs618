import PropTypes from 'prop-types'

export function Post({title, contents, author, createdAt}) {
    return (
        <article>
            <h3>{title}</h3>
            <div>{contents}</div>
            {author && (
                <em>
                    <br />
                    Written by <strong>{author}</strong>
                </em>
            )}
            Posted on {createdAt}
        </article>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    contents: PropTypes.string,
    author: PropTypes.string,
    createdAt: PropTypes.string
}