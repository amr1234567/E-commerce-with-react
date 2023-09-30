const RangeField = () => {
    return (
        <>
            <div className="size-range d-flex flex-column align-items-center mb-4">
                <h3>Size</h3>
                <input type="text" name="max-size" id="max-size" placeholder="Max" />
                <input type="text" name="min-size" id="min-size" placeholder="Min" />
                <div className="btn btn-primary">Assendind</div>
                <div className="btn btn-secondary">disandding</div>
            </div>
            <div className="brands-select d-flex flex-column mb-4">
                <h3>Brands</h3>
                <div className="mt-2 mb-2 w-100">
                    <label htmlFor="Gucci">Gucci</label>
                    <input type="radio" name="brand" id="Gucci" />
                </div>
                <div className="mt-2 mb-2 w-100">
                    <label htmlFor="Addidas">Addidas</label>
                    <input type="radio" name="brand" id="Addidas" />
                </div>
                <div className="mt-2 mb-2 w-100">
                    <label htmlFor="Zara">Zara</label>
                    <input type="radio" name="brand" id="Zara" />
                </div>
                <div className="mt-2 mb-2 w-100">
                    <label htmlFor="Puma">Puma</label>
                    <input type="radio" name="brand" id="Puma" />
                </div>
                <div className="mt-2 mb-2 w-100">
                    <label htmlFor="Tommy">Tommy</label>
                    <input type="radio" name="brand" id="Tommy" />
                </div>
                <div className="mt-2 mb-2 w-100">
                    <label htmlFor="Nike">Nike</label>
                    <input type="radio" name="brand" id="Nike" />
                </div>
                <div className="mt-2 mb-2 w-100">
                    <label htmlFor="others">others</label>
                    <input type="radio" name="brand" id="others" />
                </div>
            </div>
            <div className="rating-range  d-flex flex-column align-items-center mb-4">
                <h3>Rating Range</h3>
                <input type="text" name="max-rate" id="max-rate" placeholder="Max" />
                <input type="text" name="min-rate" id="min-rate" placeholder="Min" />
                <div className="btn btn-primary">Assendind</div>
                <div className="btn btn-secondary">disandding</div>
            </div>
            <div className="price-range d-flex flex-column align-items-center mb-4">
                <h3>Price</h3>
                <input type="text" name="max-price" id="max-price" placeholder="Max" />
                <input type="text" name="min-price" id="min-price" placeholder="Min" />
                <div className="btn btn-primary">Assendind</div>
                <div className="btn btn-secondary">disandding</div>
            </div>
            <div className="rating-range  d-flex flex-column align-items-center mb-4">
                <h3>Name</h3>
                <input type="text" name="name" id="name" placeholder="name search" />
            </div>
            <div className="d-flex flex-column mb-4">
                <div className="btn btn-danger h-25">Clear </div>
                <div className="btn btn-primary h-25 mt-5" id="send-range"> get the range </div>
            </div>
        </>
    );
}

export default RangeField;
