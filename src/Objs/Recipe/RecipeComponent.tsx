import { ContentTag, ImageTag, provideComponent } from 'scrivito'
import { Recipe } from './RecipeObjClass'

provideComponent(Recipe, ({ page }) => {
  return (
    <>
      <section className="bg-light-grey py-4">
        <div className="container">
          <div className="row align-items-stretch">
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <ImageTag
                  content={page}
                  attribute="image"
                  className="img-background"
                />
              </div>
            </div>

            <div className="col-md-8 mb-4">
              <div className="card mb-4">
                <div className="card-body p-4">
                  <ContentTag
                    content={page}
                    attribute="title"
                    className="h3 mb-0 text-primary"
                    tag="h1"
                  />

                  <ContentTag
                    content={page}
                    attribute="description"
                    className="mb-3"
                    tag="div"
                  />

                  <div className="mb-2">
                    {page.get('prepTime') && (
                      <span className="badge bg-secondary me-2">
                        <i className="bi bi-clock me-1"></i>
                        Prep: {page.get('prepTime')}
                      </span>
                    )}
                    {page.get('cookTime') && (
                      <span className="badge bg-secondary me-2">
                        <i className="bi bi-fire me-1"></i>
                        Cook: {page.get('cookTime')}
                      </span>
                    )}
                    {page.get('servings') && (
                      <span className="badge bg-secondary">
                        <i className="bi bi-people me-1"></i>
                        {page.get('servings')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className="h4 mb-3">Ingredients</h2>
              <ul className="list-unstyled">
                <ContentTag content={page} attribute="ingredients" />
              </ul>
            </div>

            <div className="col-md-6">
              <h2 className="h4 mb-3">Instructions</h2>
              <ContentTag content={page} attribute="instructions" tag="div" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
})
