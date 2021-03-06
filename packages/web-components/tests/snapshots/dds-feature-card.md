# `dds-feature-card`

## `Misc attributes`

####   `should render with minimum attributes`

```
<slot name="image">
</slot>
<div class="bx--card__wrapper">
  <div class="bx--card__content">
    <p
      class="bx--card__eyebrow"
      hidden=""
    >
      <slot name="eyebrow">
      </slot>
    </p>
    <h3
      class="bx--card__heading"
      hidden=""
    >
      <slot name="heading">
      </slot>
    </h3>
    <div
      class="bx--card__copy"
      hidden=""
    >
      <slot>
      </slot>
    </div>
    <slot name="footer">
    </slot>
  </div>
</div>

```

####   `should render with various attributes`

```
<a
  class="bx--card bx--card--link bx--feature-card bx--tile bx--tile--clickable"
  href="https://example.com"
  id="link"
>
  <slot name="image">
  </slot>
  <div class="bx--card__wrapper">
    <div class="bx--card__content">
      <p
        class="bx--card__eyebrow"
        hidden=""
      >
        <slot name="eyebrow">
        </slot>
      </p>
      <h3
        class="bx--card__heading"
        hidden=""
      >
        <slot name="heading">
        </slot>
      </h3>
      <div
        class="bx--card__copy"
        hidden=""
      >
        <slot>
        </slot>
      </div>
      <slot name="footer">
      </slot>
    </div>
  </div>
</a>

```

