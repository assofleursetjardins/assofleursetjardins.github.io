import { visit } from 'unist-util-visit';

/**
 * Plugin remark pour transformer les liens externes en MDX
 * Ajoute target="_blank", rel="noindex nofollow noopener noreferrer" et une icône externe
 */
export function remarkExternalLinks() {
  return (tree) => {
    visit(tree, 'link', (node) => {
      const url = node.url || '';
      const isExternal = /^https?:\/\//i.test(url);

      if (isExternal) {
        // Ajouter les attributs pour les liens externes via hProperties
        // Ces propriétés seront transformées en attributs HTML par mdast-util-to-hast
        node.data = node.data || {};
        node.data.hProperties = {
          ...(node.data.hProperties || {}),
          target: '_blank',
          rel: 'noindex nofollow noopener noreferrer',
          class: 'inline-flex items-center gap-1',
        };

        // Ajouter l'icône externe comme nœud HTML dans les enfants
        const iconNode = {
          type: 'html',
          value: '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--color-foreground-light)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="inline-block shrink-0" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
        };

        // Insérer l'icône après le dernier enfant du lien
        if (node.children && node.children.length > 0) {
          node.children.push(iconNode);
        } else {
          node.children = [iconNode];
        }
      }
    });
  };
}
