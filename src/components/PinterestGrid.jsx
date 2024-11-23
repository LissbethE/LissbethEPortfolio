import { useEffect, useRef, useCallback } from "react";

const PinterestGrid = ({
  no_columns = 3,
  padding_x = 10,
  padding_y = 10,
  margin_bottom = 50,
  single_column_breakpoint = 700,
  children,
}) => {
  const containerRef = useRef(null);

  const calculateLayout = useCallback(
    (singleColumnMode) => {
      const container = containerRef.current;
      const articles = container.children;
      const containerWidth = container.clientWidth;
      let articleWidth;

      if (singleColumnMode) {
        articleWidth = containerWidth - padding_x;
      } else {
        articleWidth = (containerWidth - padding_x * no_columns) / no_columns;
      }

      Array.from(articles).forEach((article, index) => {
        article.style.width = `${articleWidth}px`;

        let currentColumn = singleColumnMode ? 0 : index % no_columns;
        let top = 0;

        Array.from(articles)
          .slice(0, index)
          .forEach((prevArticle) => {
            if (prevArticle.classList.contains(`c${currentColumn}`)) {
              top += prevArticle.offsetHeight + padding_y;
            }
          });

        article.style.left = singleColumnMode
          ? "0"
          : `${currentColumn * (articleWidth + padding_x)}px`;
        article.style.top = `${top}px`;

        article.classList.add(`c${currentColumn}`);
      });

      adjustContainerHeight();
    },
    [padding_x, padding_y, no_columns]
  );

  const adjustContainerHeight = useCallback(() => {
    const container = containerRef.current;
    const columnHeights = Array(no_columns).fill(0);

    Array.from(container.children).forEach((article, index) => {
      const column = index % no_columns;
      columnHeights[column] += article.offsetHeight;
    });

    container.style.height = `${
      Math.max(...columnHeights) + padding_y + margin_bottom
    }px`;
  }, [no_columns, padding_y, margin_bottom]);

  const handleResize = useCallback(() => {
    if (window.innerWidth < single_column_breakpoint) {
      calculateLayout(true);
    } else {
      calculateLayout(false);
    }
  }, [single_column_breakpoint, calculateLayout]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <div ref={containerRef} className="pinterest-grid-container">
      {children}
    </div>
  );
};

export default PinterestGrid;
