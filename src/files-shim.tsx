import React from 'react';

function useHashPath(): string {
    const get = () => {
        const h = window.location.hash.replace(/^#/, '');
        return h.startsWith('/') ? h : '/';
    };
    const [path, setPath] = React.useState(get);
    React.useEffect(() => {
        const onChange = () => setPath(get());
        window.addEventListener('hashchange', onChange);
        return () => window.removeEventListener('hashchange', onChange);
    }, []);
    return path;
}

const PathCtx = React.createContext('/');

export function FileRouter({ children }: { children: React.ReactNode }) {
    const path = useHashPath();
    return <PathCtx.Provider value={path}>{children}</PathCtx.Provider>;
}

export function Routes({ children }: { children: React.ReactNode }) {
    const path = React.useContext(PathCtx);
    let match: React.ReactElement | null = null;
    React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;
        const p = (child.props as any).path;
        if (p === path) match = child;
    });
    if (!match) {
        React.Children.forEach(children, (child) => {
            if (!match && React.isValidElement(child) && (child.props as any).path === '/') match = child;
        });
    }
    return match ? (match as React.ReactElement).props.element : null;
}

export function Route(_props: { path: string; element: React.ReactNode }) {
    return null;
}

export function Link({ to, className, children }: { to: string; className?: string; children: React.ReactNode }) {
    return <a className={className} href={'#' + to}>{children}</a>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
    return <a href={href} target="_blank" rel="noreferrer">{children}</a>;
}

export function FileCard({ children }: { children: React.ReactNode }) {
    return <>
        <style>{'.ifc-shell{max-width:1040px;margin:0 auto;padding:24px;}@media (min-width:768px){.ifc-shell{padding:36px;}}'}</style>
        <div className="ifc-shell">{children}</div>
    </>;
}
