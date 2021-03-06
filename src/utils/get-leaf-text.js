
/**
 * Get leaf text for a node
 *
 * @param {Node} node
 * @return {Text}
 */

function getLeafText(node) {
  if (node.kind == 'text') {
    return node
  }

  return node.getFirstText()
}

/**
 * Export.
 *
 * @type {Function}
 */

export default getLeafText
