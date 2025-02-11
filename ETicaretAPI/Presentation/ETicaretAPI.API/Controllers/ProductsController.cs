using ETicaretAPI.Application.Repositories;
using ETicaretAPI.Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace ETicaretAPI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        /*private readonly IProductService _productService;

        public ProductsController(IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var products = _productService.GetProducts();
            return Ok(products);
        }*/

        readonly private IProductWriteRepository _productWriteRepository;
        readonly private IProductReadRepository _productReadRepository;

        readonly private IOrderWriteRepository _orderWriteRepository;
        readonly private IOrderReadRepository _orderReadRepository;

        readonly ICustomerWriteRepository _customerWriteRepository;

        public ProductsController(IProductReadRepository productReadRepository,
                                  IProductWriteRepository productWriteRepository,
                                  IOrderWriteRepository orderWriteRepository,
                                  ICustomerWriteRepository customerReadRepository,
                                  IOrderReadRepository orderReadRepository)
        {
            _productReadRepository = productReadRepository;
            _productWriteRepository = productWriteRepository;
            _orderWriteRepository = orderWriteRepository;
            _customerWriteRepository = customerReadRepository;
            _orderReadRepository = orderReadRepository;
        }
        [HttpGet]
        public async Task Get()
        {
            /*var customerId = Guid.NewGuid();
            await _customerWriteRepository.AddAsync(new() { Id = customerId, Name = "İbram" });

            await _orderWriteRepository.AddAsync(new() { Description = "buzcu", Address = "Afyon, Köylü", CustomerId = customerId });
            await _orderWriteRepository.AddAsync(new() { Description = "şimşekçi", Address = "Konya, Köyü", CustomerId = customerId });
            await _orderWriteRepository.SaveAsync();*/

            Order order = await _orderReadRepository.GetByIDAsync("0194f5c0-af79-7feb-aee6-fe64024a272c");
            order.Address = "Eskişehir";
            order.Address = "Almanya";
            await _orderWriteRepository.SaveAsync();
        }
        /*[HttpGet("{id}")]

        public async Task<IActionResult> Get(string id)
        {
            Product product = await _productReadRepository.GetByIDAsync(id);
            return Ok(product);
        }*/


    }
}
